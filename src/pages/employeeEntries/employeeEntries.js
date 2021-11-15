import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./employeeEntries.css";
import Paladin_logo from "../../components/common/images/logo_paladin.png";
import Textmail from "../../components/common/Input/Input";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { Alert } from "bootstrap";
import Select from "../../components/common/Select/Select";

const defaultValues = {
  email: "",
  name: "",
  fatherName: "",
  bloodGroup: "",
  dob: "",
  gender: "",
  martialStatus: "",
  mobileNo: "",
  phNo: "",
  emergencyNo: "",
  pAddress: "",
  tAddress: "",
  panNo: "",
  aadharNo: "",
  bankName: "",
  AccHolderName: "",
  accNo: "",
  ifsc: "",
  doj: "",
  empId: "",
  designation: "",
  grade: "",
  department: "",
};

export default function EmployeeEntries() {
  const { handleSubmit, register, reset, control } = useForm({ defaultValues });
  const [data, setData] = useState(null);
  const onSubmit = async (data) => {
    console.log(data);
    //
    await axios
      .post("http://localhost:1337/api/users", data)
      .then((response) => {
        console.log(response.data);
      });
  };

  const onError = (errors, e) => console.log(errors, e, "errors");
  const clickSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(async (data) => await onSubmit(data))}
      className="form"
      required
    >
      <div className="container_fluid main">
        <div className="next_container">
          <div className="row  remove_margin top_content">
            <div className="col-md-12">
              <div className="row main_row">
                <div className="col-md-6 col-xs-12 image_width ">
                  <div className="image_hold">
                    {" "}
                    <img src={Paladin_logo} />
                  </div>
                </div>
                <div className="col-md-6 col-xs-12 image_width ">
                  <div className="goodmorning_div">
                    <div className="top_text_holder">
                      <div className="goodmorning">Good Morning</div>
                      <div className="date">30 Sep 2021</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content_part">
            <div className="content_part_adjust">
              <div className="row first_middle">
                <div className="col-md-12 remove_padding">
                  <div className="heading_one">Employee Information</div>
                </div>
              </div>
              <div className="row list_one">
                <div className="col-md-3 col-xs-12 ">
                  <div>
                    <label className="label_form">Name</label>
                  </div>

                  <Textmail
                    type="text"
                    register={register}
                    name="name"
                    required={true}
                  />
                </div>
                <div className="col-md-3 col-xs-12">
                  <div>
                    <label className="label_form"> Father/Gaurdians Name</label>
                  </div>
                  <Textmail
                    type="text"
                    register={register}
                    name="fatherName"
                    required={true}
                  />
                </div>
                <div className="col-md-3 col-xs-12">
                  <div>
                    <label className="label_form">Blood Group</label>
                  </div>
                  <Textmail
                    type="text"
                    register={register}
                    name="bloodGroup"
                    required
                  />
                </div>
                <div className="col-md-3 col-xs-12">
                  <div>
                    <label className="label_form">Date of Birth</label>
                  </div>
                  <Textmail
                    type="date"
                    register={register}
                    name="dob"
                    required
                  />
                </div>
              </div>

              <div className="row list_two">
                <div className="col-md-3 col-xs-12">
                  <div>
                    <label className="label_form">Gender</label>
                  </div>
                  <div className="form_input_spl">
                    <input
                      ref={register}
                      type="radio"
                      id="male"
                      value="male"
                      name="gender"
                      checked="checked"
                      required
                    ></input>
                    <label for="male" className="male_label">
                      {" "}
                      Male
                    </label>
                    <input
                      ref={register}
                      type="radio"
                      id="female"
                      value="female"
                      name="gender"
                    ></input>

                    <label for="female" className="male_label">
                      {" "}
                      Female
                    </label>
                    <input
                      ref={register}
                      type="radio"
                      id="others"
                      value="others"
                      name="gender"
                    ></input>
                    <label for="others" className="male_label">
                      Others
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-xs-12">
                  <div>
                    <label className="label_form">Marital Status</label>
                  </div>
                  <div className="form_input">
                    <Select
                      className="choose_gender"
                      name="martialStatus"
                      dropdown={[
                        { id: 1, value: "Married" },
                        { id: 2, value: "Unmarried" },
                      ]}
                    />
                  </div>
                </div>
                <div className="col-md-3 col-xs-12">
                  <div>
                    <label className="label_form">Mobile Number</label>
                  </div>

                  <Textmail
                    type="number"
                    register={register}
                    name="mobileNo"
                    required
                  />
                </div>
                <div className="col-md-3 col-xs-12">
                  <div>
                    <label className="label_form">Phone No</label>
                  </div>
                  <Textmail
                    type="number"
                    register={register}
                    name="phNo"
                    required
                  />
                </div>
              </div>
              <div className="row list_three">
                <div className="col-md-3 col-xs-12">
                  <div>
                    <label className="label_form">Emergency No</label>
                  </div>
                  <Textmail
                    type="number"
                    register={register}
                    name="emergencyNo"
                    required
                  />
                </div>
                <div className="col-md-3 col-xs-12">
                  <div>
                    <label className="label_form">Personal Email</label>
                  </div>
                  <Textmail
                    type="mail"
                    register={register}
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="row four">
                <div className="col-md-6 col-xs-12">
                  <div className="heading_one">Address</div>
                  <div className="row sub_four ">
                    <div className="col-md-6 col-xs-12">
                      <div>
                        <label className="label_form">Permanent Address</label>
                      </div>
                      <textarea
                        ref={register}
                        className="textarea_input"
                        name="pAddress"
                        required
                      ></textarea>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <label className="label_form">Temporary Address</label>
                      <textarea
                        ref={register}
                        className="textarea_input"
                        name="tAddress"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="heading_one">Id Details</div>
                  <div className="row sub_four">
                    <div className="col-md-6 col-xs-12">
                      <div>
                        <label className="label_form">PAN No</label>
                      </div>
                      <Textmail
                        type="text"
                        register={register}
                        name="panNo"
                        required
                      />
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div>
                        <label className="label_form">Aadhar No</label>
                      </div>
                      <Textmail
                        type="text"
                        register={register}
                        name="aadharNo"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row five">
                <div className="col-md-12">
                  <div className="heading_one">Bank Details</div>
                </div>
              </div>
              <div className="row six">
                <div className="col-md-3 col-xs-12">
                  <div>
                    <label className="label_form">Bank Name</label>
                  </div>
                  <div className="form_input">
                    <div className="form_input">
                      <Select
                        className="choose_gender"
                        name="bankName"
                        required
                        ref={register}
                        dropdown={[
                          { id: 1, value: "State Bank Of India" },
                          { id: 2, value: "Bank Of Baroda" },
                          { id: 3, value: "Punjab National Bank" },
                          { id: 4, value: "Axis Bank" },
                          { id: 5, value: "Canara Bank" },
                          { id: 6, value: "HDFC Bank" },
                          { id: 7, value: "ICICI Bank" },
                          { id: 8, value: "Kotak Mahindra Bank<" },
                          { id: 9, value: "Yes Bank" },
                          { id: 10, value: "IndusInd Bank" },
                        ]}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-xs-12">
                  <div>
                    <label className="label_form">Acc Holder Name</label>
                  </div>
                  <Textmail
                    type="text"
                    register={register}
                    name="AccHolderName"
                    required
                  />
                </div>
                <div className="col-md-3 col-xs-12">
                  <div>
                    <label className="label_form">Account No</label>
                  </div>
                  <Textmail
                    type="number"
                    register={register}
                    name="accNo"
                    required
                  />
                </div>
                <div className="col-md-3 col-xs-12">
                  <div>
                    <label className="label_form">IFSC No</label>
                  </div>
                  <Textmail
                    type="text"
                    register={register}
                    name="ifsc"
                    required
                  />
                </div>
              </div>
              <div className="row seven">
                <div className="col-md-12">
                  <div className="heading_one">Employee Details</div>
                </div>
              </div>
              <div className="row eight">
                <div className="col-md-3 col-xs-12">
                  <div>
                    <label for="meeting" className="label_form">
                      Date Of Joining
                    </label>
                  </div>
                  <Textmail
                    id="meeting"
                    type="date"
                    register={register}
                    name="doj"
                    required
                    // value="2016-06-21"
                  />
                </div>
                <div className="col-md-3 col-xs-12">
                  <div>
                    <label className="label_form">Employee Id</label>
                  </div>
                  <Textmail
                    type="text"
                    register={register}
                    name="empId"
                    required
                  />
                </div>
                <div className="col-md-3 col-xs-12">
                  <div>
                    <label className="label_form">Designation</label>
                  </div>

                  <Select
                    className="choose_gender"
                    name="designation"
                    required
                    ref={register}
                    dropdown={[
                      { id: 1, value: "Software Trainee" },
                      { id: 2, value: "Jr.Software Developer" },
                      { id: 3, value: "Software Developer" },
                      { id: 4, value: "Sr.Software Developer" },
                      { id: 5, value: "Trainee" },
                      { id: 6, value: "Jr.UI & UX Designer" },
                      { id: 7, value: "UI & UX Designer" },
                      { id: 8, value: "Sr.UI & UX Designer" },
                    ]}
                  />
                </div>
                <div className="col-md-3 col-xs-12">
                  <div className="row nine">
                    <div className="col-md-6 col-xs-12">
                      <div>
                        <label className="label_form">Grade</label>
                      </div>

                      <Select
                        className="choose_gender"
                        name="grade"
                        required
                        ref={register}
                        dropdown={[
                          { id: 1, value: "T1" },
                          { id: 2, value: "T2" },
                          { id: 3, value: "T3" },
                        ]}
                      />
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div>
                        <label className="label_form">Department</label>
                      </div>

                      <Select
                        className="choose_gender"
                        name="grade"
                        required
                        ref={register}
                        dropdown={[
                          { id: 1, value: "IT" },
                          { id: 2, value: "Testing" },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="action_submit">
                <button
                  className="process_end"
                  type="submit"
                  // onClick={clickSubmit}
                >
                  SUBMIT
                </button>
              </div>

              <footer className="footer_content_paladin">
                <div className="text_paladin">
                  <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
                  AlignedAround LLC 2021
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
