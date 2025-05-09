import TabBasic from "../../components/tabs/TabBasic"
import TabCustomPills from "../../components/tabs/TabCustomPills"
import TabPills from "../../components/tabs/TabPills"
import TabVertical from "../../components/tabs/TabVertical"
import TabVerticalCustom from "../../components/tabs/TabVerticalCustom"
import TabVerticalPills from "../../components/tabs/TabVerticalPills"

function TabsPage() {
  return (
    <>
      <div className="page-header">
        <h3 className="page-title">
          Tabs
        </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={event => event.preventDefault()}>UI Elements</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Tabs</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <TabBasic />
        <TabVertical />
        <TabVerticalCustom />
        <TabPills />
        <TabVerticalPills />
        <TabCustomPills />
      </div>
    </>
  )
}

export default TabsPage