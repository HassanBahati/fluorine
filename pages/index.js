import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://images.unsplash.com/photo-1573167710701-35950a41e251?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyJTIwbWVldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    address: "Kampala Soliz House",
    description: "This iis a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://images.unsplash.com/photo-1573167710701-35950a41e251?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyJTIwbWVldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    address: "Muyenga Kampala",
    description: "This iis a fsecond meetup",
  },
];

const Homepage = () => {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />;
    </Layout>
  );
};

export default Homepage;
