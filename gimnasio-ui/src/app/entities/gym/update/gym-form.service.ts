import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IGym, NewGym } from '../gym.model';
import { IUser } from 'app/entities/user/user.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IGym for edit and NewGymFormGroupInput for create.
 */
type GymFormGroupInput = IGym | PartialWithRequiredKeyOf<NewGym>;

type GymFormDefaults = Pick<NewGym, 'id'>;

type GymFormGroupContent = {
  id: FormControl<IGym['id'] | NewGym['id']>;
  name: FormControl<IGym['name']>;
  registrationNumber: FormControl<IGym['registrationNumber']>;
  location: FormControl<IGym['location']>;
  email: FormControl<IGym['email']>;
  badgeAmount: FormControl<IGym['badgeAmount']>;
  phoneNumber: FormControl<IGym['phoneNumber']>;
  description: FormControl<IGym['description']>;
  badgeDesignation: FormControl<IGym['badgeDesignation']>;
  calendar: FormControl<IGym['calendar']>;
  progressMonitoring: FormControl<IGym['calendar']>;
  user: FormControl<IGym['user']>;
};

export type GymFormGroup = FormGroup<GymFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class GymFormService {
  createGymFormGroup(gym: GymFormGroupInput = { id: null }): GymFormGroup {
    const gymRawValue = {
      ...this.getFormDefaults(),
      ...gym,
    };
    return new FormGroup<GymFormGroupContent>({
      id: new FormControl(
        { value: gymRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      name: new FormControl(gymRawValue.name, {
        validators: [Validators.required],
      }),
      registrationNumber: new FormControl(gymRawValue.registrationNumber, {}),
      description: new FormControl(gymRawValue.description, {}),
      location: new FormControl(gymRawValue.location),
      email: new FormControl(gymRawValue.email, {}),
      badgeAmount: new FormControl(gymRawValue.badgeAmount),
      phoneNumber: new FormControl(gymRawValue.phoneNumber),
      badgeDesignation: new FormControl(gymRawValue.badgeDesignation),
      calendar: new FormControl(gymRawValue.calendar),
      progressMonitoring: new FormControl(gymRawValue.progressMonitoring),
      user: new FormControl(gymRawValue.user),
    });
  }

  getGym(form: GymFormGroup): IGym | NewGym {
    return form.getRawValue() as IGym | NewGym;
  }

  resetForm(form: GymFormGroup, gym: GymFormGroupInput): void {
    const gymRawValue = { ...this.getFormDefaults(), ...gym };
    form.reset(
      {
        ...gymRawValue,
        id: { value: gymRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): GymFormDefaults {
    return {
      id: null,
    };
  }
}