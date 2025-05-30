import BadgeGradient from "../../components/badges/BadgeGradient"
import BadgeGradientRound from "../../components/badges/BadgeGradientRound"
import BadgeIcon from "../../components/badges/BadgeIcon"
import BadgeLableOutlined from "../../components/badges/BadgeLableOutlined"
import BadgeOutlined from "../../components/badges/BadgeOutlined"
import BadgePills from "../../components/badges/BadgePills"
import BadgeVariation from "../../components/badges/BadgeVariation"
import BadgesNormal from "../../components/badges/BadgesNormal"

function Badges() {
  return (
    <>
      <div className="page-header">
          <h3 className="page-title">
            Badges
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
              <li className="breadcrumb-item active" aria-current="page">Badges</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <BadgesNormal />
          <BadgePills />
          <BadgeOutlined />
          <BadgeLableOutlined />
          <BadgeVariation />
          <BadgeIcon />
          <BadgeGradient />
          <BadgeGradientRound />
        </div>
    </>
  )
}

export default Badges