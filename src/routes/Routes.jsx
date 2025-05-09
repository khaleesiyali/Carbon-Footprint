import { Routes, Route, Navigate } from "react-router-dom";

// Listing Route pages

// const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
import Dashboard from "../pages/dashboard/Dashboard";

// const rtl = lazy(() => import("../pages/rtl/RTL"));
import Rtl from "../pages/rtl/RTL";

// apps
import Kanban from "../pages/apps/Kanban";
import Todo from '../pages/apps/Todo'
import Tickets from "../pages/apps/Tickets";
import Chats from "../pages/apps/Chats";
import Email from "../pages/apps/Email";
import Calendar from "../pages/apps/Calendar";
import Gallery from "../pages/apps/Gallery";

// widgets
import Widget from "../pages/widgets/Widget";

// basic-ui
import Accordions from "../pages/basic-elements/Accordions";
import Buttons from "../pages/basic-elements/Buttons";
import Badges from "../pages/basic-elements/Badges";
import Breadcrumbs from "../pages/basic-elements/Breadcrumbs";
import Dropdowns from "../pages/basic-elements/Dropdowns";
import Modals from "../pages/basic-elements/Modals";
import Progressbar from "../pages/basic-elements/Progressbar";
import Pagination from "../pages/basic-elements/Pagination";
import Tabs from '../pages/basic-elements/Tabs'
import Typography from "../pages/basic-elements/Typography";
import Tooltips from "../pages/basic-elements/Tooltips";
import Popups from "../pages/basic-elements/Popups";



// advanced-ui
import Dragula from "../pages/advanced-elements/Dragula";
import Clipboard from "../pages/advanced-elements/Clipboard";
import Context from "../pages/advanced-elements/Contextmenu";
import Slider from '../pages/advanced-elements/Sliders'
import Carousel from "../pages/advanced-elements/Carousel";
import Loaders from "../pages/advanced-elements/Loaders";
import TreeView from "../pages/advanced-elements/TreeView";

// forms
import BasicForm from "../pages/form-elements/BasicForm";
import AdvancedForm from "../pages/form-elements/AdvancedForm";
import Validation from "../pages/form-elements/Validation";
import Wizard from "../pages/form-elements/Wizard";

// tables
import BasicTable from "../pages/tables/BasicTable";
import ReactTable from "../pages/tables/ReactTable";
import Datatable from "../pages/tables/DataTable";
import AGGrid from '../pages/tables/AGGrid'

// maps
import VectorMap from "../pages/maps/VectorMap";
import SimpleMap from "../pages/maps/SimpleMap";

import Notification from "../pages/notifications/Notifications";

// icons
import FlagIcons from "../pages/icons/FlagIcons";
import Fontawesome from "../pages/icons/Fontawesome";
import SimpleIcons from "../pages/icons/Simpleline";
import Feather from '../pages/icons/ReactFeather'
import Typicons from "../pages/icons/Typicons";

// editors
import TextEditor from "../pages/text-editor/TextEditor";
import CodeEditor from "../pages/code-editor/CodeEditor";

// charts
import Chartjs from "../pages/charts/Chartjs";
import Nivo from "../pages/charts/Nivo";
import Recharts from "../pages/charts/Recharts";
import AntV from "../pages/charts/AntV";
import Gauge from "../pages/charts/GaugeCharts";

// user-pages
import Login from "../pages/user-pages/Login";
import Login2 from "../pages/user-pages/Login-2";
import Register from "../pages/user-pages/Register";
import Register2 from "../pages/user-pages/Register-2";
import Lockscreen from "../pages/user-pages/Lockscreen";

// error-pages
import Error404 from "../pages/error-pages/404";
import Error500 from "../pages/error-pages/500";

// general-pages
import Blankpage from "../pages/general-pages/Blankpage";
import Landing from "../pages/general-pages/Landingpage";
import Profile from "../pages/general-pages/Profile";
import Faq from "../pages/general-pages/Faq";
import Faq2 from "../pages/general-pages/Faq-2";
import Newsgrid from "../pages/general-pages/Newsgrid";
import Timeline from "../pages/general-pages/Timeline";
import Searchresults from "../pages/general-pages/Searchresults";
import Portfolio from "../pages/general-pages/Portfolio";
import Userlisting from "../pages/general-pages/Userlisting";

// ecommerce
import Invoice from "../pages/ecommerce/Invoice";
import Pricing from "../pages/ecommerce/Pricing";
import Catalogue from "../pages/ecommerce/Catalogue";
import Project from "../pages/ecommerce/Project";
import Orders from "../pages/ecommerce/Orders";
import Documentation from "../pages/documentation/Documentation";

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />        
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/rtl" element={<Rtl />} />
        <Route path="/apps/kanban" element={<Kanban />} />
        <Route path="/apps/todo" element={<Todo />} />
        <Route path="/apps/ticket" element={<Tickets />} />
        <Route path="/apps/chat" element={<Chats />} />
        <Route path="/apps/email" element={<Email />}  />
        <Route path="/apps/calendar" element={<Calendar />} />
        <Route path="/apps/gallery" element={<Gallery />} />
        <Route exact path="/widgets" element={<Widget />} />
        <Route path="/basic-ui/accordions" element={<Accordions />} />
        <Route path="/basic-ui/buttons" element={<Buttons />} />
        <Route path="/basic-ui/badges" element={<Badges />} />
        <Route path="/basic-ui/breadcrumbs" element={<Breadcrumbs />} />
        <Route path="/basic-ui/dropdowns" element={<Dropdowns />} />
        <Route path="/basic-ui/modal" element={<Modals />} />
        <Route path="/basic-ui/progressbar" element={<Progressbar />} />
        <Route path="/basic-ui/pagination" element={<Pagination />} />
        <Route path="/basic-ui/tabs" element={<Tabs />} />
        <Route path="/basic-ui/typography" element={<Typography />} />
        <Route path="/basic-ui/tooltips" element={<Tooltips />} />
        <Route path="/basic-ui/popups" element={<Popups />} />
        <Route path="/advanced-ui/dragula" element={<Dragula />} />
        <Route path="/advanced-ui/clipboard" element={<Clipboard />} />
        <Route path="/advanced-ui/context" element={<Context />} />
        <Route path="/advanced-ui/slider" element={<Slider />} />
        <Route path="/advanced-ui/carousel" element={<Carousel />} />
        <Route path="/advanced-ui/loaders" element={<Loaders />} />
        <Route path="/advanced-ui/treeview" element={<TreeView />} />
        <Route path="/form-elements/basic-elements" element={<BasicForm />} />
        <Route path="/form-elements/advanced-elements"element={<AdvancedForm />} />
        <Route path="/form-elements/validation" element={<Validation />} />
        <Route path="/form-elements/wizard" element={<Wizard />} />
        <Route path="/tables/basic-table" element={<BasicTable />} />
        <Route path="/tables/react-table" element={<ReactTable />} />
        <Route path="/tables/data-table" element={<Datatable />} />
        <Route path="/tables/ag-grid" element={<AGGrid />} />
        <Route path="/maps/pigeon-map" element={<VectorMap />} />
        <Route path="/maps/simple-map" element={<SimpleMap />} />
        <Route exact path="/notification" element={<Notification />} />
        <Route path="/icons/flag-icon" element={<FlagIcons />} />
        <Route path="/icons/font-awesome" element={<Fontawesome />} />
        <Route path="/icons/simple-line" element={<SimpleIcons />} />
        <Route path="/icons/feather" element={<Feather />} />
        <Route path="/icons/typicons" element={<Typicons />} />
        <Route path="/text-editor" element={<TextEditor />} />
        <Route path="/code-editor" element={<CodeEditor />} />
        <Route path="/charts/chart-js" element={<Chartjs />} />
        <Route path="/charts/nivo" element={<Nivo />} />
        <Route path="/charts/recharts" element={<Recharts />} />
        <Route path="/charts/antv" element={<AntV />} />
        <Route path="/charts/gauge" element={<Gauge />} />
        <Route path="/user-pages/login" element={<Login />} />
        <Route path="/user-pages/login-2" element={<Login2 />} />
        <Route path="/user-pages/register" element={<Register />} />
        <Route path="/user-pages/register-2" element={<Register2 />} /> 
        <Route path="/user-pages/lock-screen" element={<Lockscreen />} />
        <Route path="/error-pages/404" element={<Error404 />} />
        <Route path="/error-pages/500" element={<Error500 />} />
        <Route path="/general-pages/blank-page" element={<Blankpage />} />
        <Route path="/general-pages/landing" element={<Landing />} />
        <Route path="/general-pages/profile" element={<Profile />} />
        <Route path="/general-pages/2faq" element={<Faq2 />} />
        <Route path="/general-pages/news-grid" element={<Newsgrid />} />
        <Route path="/general-pages/faq" element={<Faq />} />
        <Route path="/general-pages/search-results" element={<Searchresults />} />
        <Route path="/general-pages/timeline" element={<Timeline />} />
        <Route path="/general-pages/portfolio" element={<Portfolio />} />
        <Route path="/general-pages/user-listing" element={<Userlisting />} />
        <Route path="/ecommerce/invoice" element={<Invoice />} />
        <Route path="/ecommerce/pricing" element={<Pricing />} />
        <Route path="/ecommerce/catalogue" element={<Catalogue />} />
        <Route path="/ecommerce/project" element={<Project />} />
        <Route path="/ecommerce/orders" element={<Orders />} />
        <Route exact path="/documentation" element={<Documentation />} />
      </Routes>
  );
}

export default AppRoutes;
