import SocialTxt from '../../components/buttons/SocialTxt'
import SocialIcons from '../../components/buttons/SocialIcons'
import BtnGroups from '../../components/buttons/BtnGroups'
import BtnIconTxt from '../../components/buttons/BtnIconTxt'
import BtnBlock from '../../components/buttons/BtnBlock'
import BtnIcon from '../../components/buttons/BtnIcon'
import BtnSize from '../../components/buttons/BtnSize'
import BtnGradient from '../../components/buttons/BtnGradient'
import BtnRound from '../../components/buttons/BtnRound'
import BtnOutlined from '../../components/buttons/BtnOutlined'
import BtnSingle from '../../components/buttons/BtnSingle'
import BtnInverse from '../../components/buttons/BtnInverse'
import BtnNormal from '../../components/buttons/BtnNormal'

function Buttons() {
  return (
    <>
      <div className="page-header">
        <h3 className="page-title">
          Buttons
        </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
            <li className="breadcrumb-item active" aria-current="page">Buttons</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <BtnGradient />
            <BtnRound />
            <BtnOutlined />
            <BtnSingle />
            <BtnInverse />
            <BtnNormal />
          </div>
        </div>
        <div className="col-md-8 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <BtnIcon />
                <BtnSize />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 grid-margin stretch-card">
          <BtnBlock />
        </div>
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="row">
                  <BtnGroups />
                  <BtnIconTxt />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <SocialIcons />
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <SocialTxt />
        </div>
      </div>
    </>
  )
}

export default Buttons