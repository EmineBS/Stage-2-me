import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { isPresent } from 'app/core/util/operators';
import { Pagination } from 'app/core/request/request.model';
import { IUser, NewUser } from '../user.model';

export type EntityArrayResponseType = HttpResponse<IUser[]>;
export type EntityResponseType = HttpResponse<IUser>;

@Injectable({ providedIn: 'root' })
export class UserService {
  private resourceUrl = this.applicationConfigService.getEndpointFor('api/users');
  private resourceUrlAdmin = this.applicationConfigService.getEndpointFor('api/admin/users');

  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {}

  getUserIdentifier(user: IUser): string {
    return user.id;
  }
  
  create(user: NewUser): Observable<EntityResponseType> {
    return this.http.post<IUser>(this.resourceUrlAdmin, user, { observe: 'response' });
  }

  query(req?: Pagination): Observable<HttpResponse<IUser[]>> {
    const options = createRequestOption(req);
    return this.http.get<IUser[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  queryAdmin(req?: Pagination): Observable<HttpResponse<IUser[]>> {
    const options = createRequestOption(req);
    return this.http.get<IUser[]>(this.resourceUrlAdmin, { params: options, observe: 'response' });
  }

  find(id: string): Observable<EntityResponseType> {
    return this.http.get<IUser>(`${this.resourceUrlAdmin}/${id}`, { observe: 'response' });
  }

  delete(id: string): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrlAdmin}/${id}`, { observe: 'response' });
  }


  compareUser(o1: Pick<IUser, 'id'> | null, o2: Pick<IUser, 'id'> | null): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  addUserToCollectionIfMissing<Type extends Partial<IUser> & Pick<IUser, 'id'>>(
    userCollection: Type[],
    ...usersToCheck: (Type | null | undefined)[]
  ): IUser[] {
    const users: Type[] = usersToCheck.filter(isPresent);
    if (users.length > 0) {
      const userCollectionIdentifiers = userCollection.map(userItem => this.getUserIdentifier(userItem)!);
      const usersToAdd = users.filter(userItem => {
        const userIdentifier = this.getUserIdentifier(userItem);
        if (userCollectionIdentifiers.includes(userIdentifier)) {
          return false;
        }
        userCollectionIdentifiers.push(userIdentifier);
        return true;
      });
      return [...usersToAdd, ...userCollection];
    }
    return userCollection;
  }
}
