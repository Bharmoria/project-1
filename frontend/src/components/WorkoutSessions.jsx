import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Discover our Top Workout Sessions, designed to help you achieve your fitness goals faster. From high-intensity interval training (HIIT) to strength-building routines, we offer expert-led programs tailored to all levels. Stay motivated with dynamic workouts that challenge your body and mind. Join now and elevate your fitness journey with our best sessions!
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Explore our Featured Bootcamps, designed to push your limits and transform your fitness. Whether you're looking to build strength, lose weight, or increase endurance, our expert trainers lead you through intense, results-driven workouts. Join our community for high-energy, challenging sessions that deliver real results. Start your fitness journey with the best bootcamps today!
        </p>
        <div className="bootcamps">
          <div>
            <h4>Transform Your Body with Expert Workouts</h4>
            <p>
            Achieve your fitness goals faster with personalized workout plans crafted by certified trainers. Whether you’re a beginner or seasoned athlete, we have the perfect program tailored to your needs. Start your journey today and unlock your true potential.
            </p>
          </div>
          <div>
            <h4>Join Our Fitness Community</h4>
            <p>
            Connect with like-minded individuals and stay motivated in our supportive fitness community. Share progress, tips, and experiences with others who are on the same journey. Together, we’ll push each other to succeed!
            </p>
          </div>
          <div>
            <h4>Track Your Progress Anytime, Anywhere</h4>
            <p>
            Stay on top of your fitness journey with our easy-to-use progress tracking tools. Log workouts, monitor improvements, and set new goals with real-time feedback, all accessible through your personal dashboard.
            </p>
          </div>
          <div>
            <h4>Top Rated Bootcamps for Every Fitness Level</h4>
            <p>
            Our bootcamp programs are designed to challenge and motivate. From beginner sessions to advanced training, each class is packed with high-energy routines that build strength, endurance, and flexibility. Find your perfect fit today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
