import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Header, ListBox } from "../components";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { experience, jobTypes, jobs } from "../utils/data";
import JobCard from "../components/JobCard";

const FindJob = () => {
  const [sort, setSort] = useState("Newest");
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState(1);
  const [recordCount, setRecordCount] = useState(0);
  const [data, setData] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [filterJobTypes, setFilterJobTypes] = useState([]);
  const [filterExp, setFilterExp] = useState([]);

  const [isFetching, setIsFetching] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const filterJobs = (val) => {
    if (filterJobTypes?.includes(val)) {
      setFilterJobTypes(filterJobTypes.filter((el) => el != val));
    } else {
      setFilterJobTypes([...filterJobTypes, val]);
    }
  };

  const filterExperience = async (val) => {
    setFilterExp(val);
  };
  return (
    <div className="">
      <Header
        title="Find your Dream Job with Ease"
        type="home"
        handleClick={() => {}}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        location={jobLocation}
        setJobLocation={setJobLocation}
      />

      <div className="container mx-auto flex gap6 2xl:gap-10 md:px-5 py-0 md:py-6 bg-[#f7fdfd]">
        <div className="hidden md:flex flex-col w-1/6 h-fit bg-white shadow-sm">
          <p className="text-lg font-semibold  text-slate-600">Filter Seacrh</p>

          <div className="py-2">
            <div className="flex justify-between mb-3">
              <p className="flex items-center gap-2 font-semibold">
                <BiBriefcaseAlt2 />
                Job Type
              </p>

              <button className="">
                <MdOutlineKeyboardArrowDown />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {jobTypes.map((jtype, index) => (
                <div key={index} className="flex gap-2 text-sm md:text-base">
                  <input
                    type="checkbox"
                    value={jtype}
                    className="w-4 h-4"
                    onChange={(e) => filterJobs(e.target.value)}
                  />
                  <span className="">{jtype}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="py-2 mt-4">
            <div className="flex justify-between mb-3">
              <p className="flex items-center gap-2 font-semibold">
                <BsStars />
                Experience
              </p>

              <button>
                <MdOutlineKeyboardArrowDown />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {experience.map((exp) => (
                <div key={exp.title} className="flex gap-3">
                  <input
                    type="checkbox"
                    value={exp?.value}
                    className="w-4 h-4"
                    onChange={(e) => filterExperience(e.target.value)}
                  />
                  <span>{exp.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-wrap gap-0 md:gap-2 md:items-center">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm md:text-base">
              Showing: <span className="font-semibold">1,902</span>
              Jobs Available
            </p>

            <div className="flex flex-col md:flex-row gap-0 md:gap-2 md:items-center">
              <p className="text-sm md:text-base">Sort By:</p>

              <ListBox sort={sort} setSort={setSort} />
            </div>
          </div>

          <div className="w-full flex flex-wrap gap-4">
            {jobs.map((job, index) => (
              <JobCard job={job} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJob;
