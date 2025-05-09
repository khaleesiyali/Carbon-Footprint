import AnimatedProgress from "../../components/progressbar/AnimatedProgress"
import ColorProgress from "../../components/progressbar/ColorProgress"
import GradientProgress from "../../components/progressbar/GradientProgress"
import LabelProgress from "../../components/progressbar/LabelProgress"
import SizeProgress from "../../components/progressbar/SizeProgress"
import StrippedProgress from "../../components/progressbar/StrippedProgress"

function Progressbar() {
  return (
    <>
      <div className="page-header">
        <h3 className="page-title">
          Progress
        </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
            <li className="breadcrumb-item active" aria-current="page">Progress</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <ColorProgress />
        <GradientProgress />
        <StrippedProgress />
        <AnimatedProgress />
        <LabelProgress />
        <SizeProgress />
      </div>
    </>
  )
}

export default Progressbar