import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';

// FontAwesome Regular SVG Icons

// FontAwesome Solid SVG Icons

import {
  faChevronRight,
  faRadio,
  faBitcoinSign,
  faSitemap,
  faArrowsSpin,
  faEllipsis,
  faPrint,
  faMapMarkerAlt,
  faTachometerAlt,
  faAlignCenter,
  faExternalLinkAlt,
  faShareSquare,
  faInfoCircle,
  faSync,
  faQuoteRight,
  faStarHalfAlt,
  faShapes,
  faCarBattery,
  faTable,
  faCubes,
  faPager,
  faCameraRetro,
  faBomb,
  faNetworkWired,
  faBusAlt,
  faBirthdayCake,
  faEyeDropper,
  faUnlockAlt,
  faDownload,
  faAward,
  faPlayCircle,
  faReply,
  faUpload,
  faBars,
  faEllipsisV,
  faSave,
  faSlidersH,
  faCaretRight,
  faChevronUp,
  faPlus,
  faLemon,
  faChevronLeft,
  faTimes,
  faChevronDown,
  faFilm,
  faSearch,
  faEllipsisH,
  faCog,
  faArrowsAltH,
  faPlusCircle,
  faAngleRight,
  faAngleUp,
  faAngleLeft,
  faAngleDown,
  faArrowUp,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faStar,
  faSignOutAlt,
  faThumbTack,
  faLink,
  faHandcuffs,
  faMoneyBillTransfer,
  faHistory,
  faFileCirclePlus,
  faPeopleRobbery,
  faTimeline,
  faGaugeHigh,
  faInfo,
  faFlag,
  faDotCircle,
  faRepeat,
  faCircleExclamation,
  faCheck,
  faExclamation,
  faListCheck,
  faCheckCircle,
  faSun,
  faMoneyCheckAlt,
  faUserCheck,
  faDumbbell,
  faIdCardClip,
  faIdBadge,
  faHandSparkles,
  faCalendar,
  faChartBar,
  faClock,
  faEnvelope,
  faPhone,
  faUser,
  faFingerprint,
  faPersonRifle,
  faCircleArrowUp,
} from '@fortawesome/free-solid-svg-icons';

// FontAwesome Brand SVG Icons

// Angular FontAwesome Icons

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

// Angular FontAwesome Icons Core

import {
  Calendar,
  Radio,
  Instagram,
  Twitter,
  Facebook,
  Activity,
  Bell,
  Settings,
  Search,
  Grid,
  Users,
  LifeBuoy,
  CloudDrizzle,
  Coffee,
  Box,
  Briefcase,
  Layers,
  Printer,
  Umbrella,
  CheckSquare,
} from 'angular-feather/icons';
import { calendar } from 'ngx-bootstrap/chronos/moment/calendar';

const icons = {
  Calendar,
  Activity,
  Bell,
  Settings,
  Search,
  Grid,
  Users,
  LifeBuoy,
  CloudDrizzle,
  Coffee,
  Box,
  Briefcase,
  Layers,
  Printer,
  Umbrella,
  Instagram,
  Facebook,
  Twitter,
  CheckSquare,
  Radio,
};

@NgModule({
  declarations: [],
  imports: [FeatherModule.pick(icons), FontAwesomeModule, CommonModule],
  exports: [FeatherModule],
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faTimeline,
      faMoneyBillTransfer,
      faPrint,
      faAlignCenter,
      faMapMarkerAlt,
      faHandcuffs,
      faTachometerAlt,
      faRadio,
      faExternalLinkAlt,
      faShareSquare,
      faSitemap,
      faInfoCircle,
      faQuoteRight,
      faStarHalfAlt,
      faSync,
      faShapes,
      faCarBattery,
      faTable,
      faCubes,
      faPager,
      faBomb,
      faNetworkWired,
      faBusAlt,
      faBirthdayCake,
      faEyeDropper,
      faCameraRetro,
      faUnlockAlt,
      faDownload,
      faUpload,
      faReply,
      faBars,
      faSave,
      faPlayCircle,
      faEllipsisV,
      faEllipsisH,
      faSlidersH,
      faAward,
      faCaretRight,
      faPlus,
      faTimes,
      faFilm,
      faSearch,
      faChevronRight,
      faChevronUp,
      faChevronLeft,
      faChevronDown,
      faLink,
      faCog,
      faIdBadge,
      faArrowsAltH,
      faPlusCircle,
      faAngleRight,
      faBitcoinSign,
      faEllipsis,
      faArrowsSpin,
      faAngleUp,
      faAngleLeft,
      faAngleDown,
      faArrowUp,
      faArrowDown,
      faArrowRight,
      faArrowLeft,
      faStar,
      faDumbbell,
      faHandSparkles,
      faSignOutAlt,
      faSun,
      faLemon,
      faHistory,
      faFileCirclePlus,
      faPeopleRobbery,
      faGaugeHigh,
      faInfo,
      faFlag,
      faDotCircle,
      faRepeat,
      faThumbTack,
      faCircleExclamation,
      faCheck,
      faExclamation,
      faListCheck,
      faCheckCircle,
      faInfoCircle,
      faUserCheck,
      faCalendar,
      faChartBar,
      faClock,
      faEnvelope,
      faPhone,
      faUser,
      faFingerprint,
      faPersonRifle,
      faCircleArrowUp
    );
  }
}