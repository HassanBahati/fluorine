import { useRouter } from "next/router";

//mydomain.com/somehting-important

const Detailspage = () => {
  //add input value to url
    const router = useRouter();

    const slug = router.query.slug;
    
  return (
    <div>
      <h1>Details Page </h1>
    </div>
  );
};

export default Detailspage;
