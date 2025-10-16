import React from "react";
import AppCard from "../../componants/AppCard";
import { useLoaderData } from "react-router";
import downloadsimg from '../../assets/icon-downloads.png';
import ratingsimg from '../../assets/icon-ratings.png';
import reviewimg from '../../assets/icon-review.png';

const AppDetails = () => {
  const { Apps, id } = useLoaderData();
  const app = Apps.find(a => a.id == id);

    const {image,companyName,description,ratingAvg,downloads,reviews} = app
  return (
    <>
      <div className="mt-20 mb-20">
            <div className="card bg-base-100  shadow-sm flex flex-row">
                <div>
                  <figure>
                    <img
                    src={image}
                    alt="Shoes" />
                </figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{companyName}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-between">
                    <div>
                      <img src={downloadsimg} alt="" />
                      <p>Downloads</p>
                       <p>{downloads}</p>
                    </div>
                    <div>
                      <img src={reviewimg} alt="" />
                      <p>Total Reviews</p>
                      <p>{reviews}</p>
                    </div>
                    <div>
                      <img src={ratingsimg} alt="" />
                      <p>Average Ratings</p>
                      <p>{ratingAvg}</p>
                    </div>
                    </div>
                </div>
            </div>

            <div>

            </div>
            <div className="mt-10">
                <h1>Description</h1>
                <p>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.

A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.

For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
            </div>
      </div>
    </>
  );
};

export default AppDetails;
