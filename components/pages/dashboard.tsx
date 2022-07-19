import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTachometerAlt} from "@fortawesome/free-solid-svg-icons";


export default function Dashboard() {
    return (
        <>
            <div className="col-12 py-2 px-3 row">

                <div className="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2 px-2 mb-3">
                    <div className="col-12 px-0 py-2 d-flex rounded-3 main-box-wedit user">
                        <div className="d-card">
                            <div
                                className="col-12 px-0 text-center d-flex align-items-center justify-content-center d-icon">

                                <FontAwesomeIcon
                                    icon={faTachometerAlt}
                                    style={{width: "18px", cursor: "pointer"}}
                                />{" "}
                            </div>
                        </div>
                        <div className="px-2 py-2 user2">
                            <h6 className="font-1">Employees</h6>
                            <h6 className="font-3">2</h6>
                        </div>

                    </div>
                </div>


                <div className="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2 px-2 mb-3">
                    <div className="col-12 px-0 py-2 d-flex rounded-3 main-box-wedit user">
                        <div className="d-card">
                            <div
                                className="col-12 px-0 text-center d-flex align-items-center justify-content-center d-icon">

                                <FontAwesomeIcon
                                    icon={faTachometerAlt}
                                    style={{width: "18px", cursor: "pointer"}}
                                />{" "}
                            </div>
                        </div>
                        <div className="px-2 py-2 user2">
                            <h6 className="font-1">Employees</h6>
                            <h6 className="font-3">2</h6>
                        </div>

                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2 px-2 mb-3">
                    <div className="col-12 px-0 py-2 d-flex rounded-3 main-box-wedit user">
                        <div className="d-card">
                            <div
                                className="col-12 px-0 text-center d-flex align-items-center justify-content-center d-icon">

                                <FontAwesomeIcon
                                    icon={faTachometerAlt}
                                    style={{width: "18px", cursor: "pointer"}}
                                />{" "}
                            </div>
                        </div>
                        <div className="px-2 py-2 user2">
                            <h6 className="font-1">Employees</h6>
                            <h6 className="font-3">2</h6>
                        </div>

                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2 px-2 mb-3">
                    <div className="col-12 px-0 py-2 d-flex rounded-3 main-box-wedit user">
                        <div className="d-card">
                            <div
                                className="col-12 px-0 text-center d-flex align-items-center justify-content-center d-icon">

                                <FontAwesomeIcon
                                    icon={faTachometerAlt}
                                    style={{width: "18px", cursor: "pointer"}}
                                />{" "}
                            </div>
                        </div>
                        <div className="px-2 py-2 user2">
                            <h6 className="font-1">Employees</h6>
                            <h6 className="font-3">2</h6>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}