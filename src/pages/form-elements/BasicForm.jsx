import BasicFormElements from "../../components/forms/BasicFormElements"
import BasicInputGroups from "../../components/forms/BasicInputGroups"
import CheckboxControls from "../../components/forms/CheckboxControls"
import ColoredCheckboxControls from "../../components/forms/ColoredCheckboxControls"
import DefaultForm from "../../components/forms/DefaultForm"
import HorizontalForm from "../../components/forms/HorizontalForm"
import InlineForm from "../../components/forms/InlineForm"
import InputSizes from "../../components/forms/InputSizes"
import SelectSizes from "../../components/forms/SelectSizes"
import TwoColumnForm from "../../components/forms/TwoColumnForm"

function BasicForm() {
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Form Elements</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Forms</a></li>
            <li className="breadcrumb-item active" aria-current="page">Form elements</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Default Form</h4>
              <p className="card-description"> Basic form layout</p>
              <form className="form-sample">
                <DefaultForm /> 
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Horizontal Form</h4>
              <p className="card-description"> Horizontal From Layout</p>
              <form className="form-sample">
                <HorizontalForm />
              </form>
            </div>
          </div>
        </div>
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Basic Form Elements</h4>
              <p className="card-description"> Basic form elements</p>
              <form className="form-sample">
                <BasicFormElements />
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Input size</h4>
              <p className="card-description">Add attributes <code>size="lg"</code> or <code>size="sm"</code></p>
              <InputSizes />
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Select size</h4>
              <p className="card-description">Add attributes <code>size="lg"</code> or <code>size="sm"</code></p>
              <SelectSizes />
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Basic Input Groups</h4>
                <p className="card-description"> Basic bootstrap input groups </p>
                <BasicInputGroups />
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Checkbox Controls</h4>
                <p className="card-description">Checkbox and radio controls (default appearance is in primary color)</p>
                <CheckboxControls />
            </div>
            <div className="card-body">
              <h4 className="card-title">Colored Checkbox Controls</h4>
                <p className="card-description">Add className <code>.form-check-&#123;color&#125;</code> for checkbox and radio controls in theme colors</p>
                <ColoredCheckboxControls />
            </div>
          </div>
        </div>
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Inline Forms</h4>
                <p className="card-description"> Use the <code>.form-inline</code> className to display a series of labels, form controls, and buttons on a single horizontal row </p>
                <InlineForm />
            </div>
          </div>
        </div>
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Horizontal Two Column</h4>
                <TwoColumnForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicForm