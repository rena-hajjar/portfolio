import ArrowLeft from "@/app/data/svgs/arrowLeft";
import ArrowRight from "@/app/data/svgs/arrowRight";

export default function CourseModal() {
  return (
    <>
      <div className="modal-sidebar">
        <div className="sidebar-title">Scroll to:</div>
        <div className="sidebar-text">
          <div>Linear Data Analysis</div>
          <div>Computer Architecture</div>
          <div>Data Structures</div>
          <div>Analytical Genomics</div>
          <div>Computer-Integrated Surgery</div>
          <div>Programming Paradigms</div>
          <div>Philosophy of Physics</div>
        </div>
      </div>
      <div className="rest-of-modal">
        <div className="coursework-header">
          {/* <ArrowRight /> */}
          <div className="modal-title">Coursework</div>
          {/* <ArrowLeft /> */}
        </div>
        <div className="coursework-body">
          <div className="test-text"></div>
        </div>
      </div>
    </>
  );
}
