import About from './components/About';
import Company from './components/Company';
import ORG from './components/ORG';
import Home from './components/Home';

export const jsonData = [
  { path:"/", component:Home, name:"Home" },
  { path:"/about", component:About, name:"About" },
  { path:"/company", component:Company, name:"Company"  },
  { path:"/org", component:ORG, name:"ORG"}
]
