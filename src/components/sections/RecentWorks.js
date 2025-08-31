import RecentWorksDefault from "./recentWorks/RecentWorksDefault";
const RecentWorks = ({ user }) => {
  switch (user) {
    default:
      return <RecentWorksDefault />;
  }
};
export default RecentWorks;
