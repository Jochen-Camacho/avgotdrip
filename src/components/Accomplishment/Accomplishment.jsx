import React, { useState } from "react";
import "./Accomplishment.css";
import * as avBack from "../../assests/images/av";
import * as milestones from "../../assests/images/milestones";
import { TbMicrophone2 } from "react-icons/tb";
import { useInView } from "react-intersection-observer";

export const Accomplishment = () => {
  const [active, setActive] = React.useState(0);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const { ref, inView } = useInView({});

  React.useEffect(() => {
    if (inView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [inView, hasBeenInView]);

  const handleToggle = (index) => {
    console.log("clicked");
    setActive(index);
  };
  const items = [
    { title: "Year So Far", img: avBack.av1, mileStone: milestones.milestone5 },
    { title: "Top 1%", img: avBack.av5, mileStone: milestones.milestone2 },
    {
      title: "Top Debut Album",
      img: avBack.av3,
      mileStone: milestones.milestone3,
    },
    {
      title: "Alright Hitting 10M",
      img: avBack.av4,
      mileStone: milestones.milestone4,
    },
    {
      title: "300k Monthly Listeners",
      img: avBack.av2,
      mileStone: milestones.milestone1,
    },
  ];
  return (
    <div className="accomplishContOuter">
      <div
        className={`accomplishCont ${hasBeenInView ? "inView" : ""}`}
        ref={ref}
      >
        <h2 className="page-title">Milestones</h2>
        <div className="accomplishImageCont">
          {items.map((item, index) => {
            const isActive = active === index ? "active" : "";
            return (
              <article
                key={index}
                className={`accomplishmentItem ${isActive}`}
                onClick={() => handleToggle(index)}
              >
                <img src={item.img} className="backgroundMileImg" />
                <img src={item.mileStone} className="mileStoneImg" />
                <div className="content">
                  <span className="material-symbols-outlined">
                    <TbMicrophone2 />
                  </span>
                  <div>
                    <h2 className={`aTitle ${isActive}`}>{item.title}</h2>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};
