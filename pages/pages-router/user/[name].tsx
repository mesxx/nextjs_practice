import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <div className="flex">
      <div className="flex-1">username: {name}</div>
    </div>
  );
};

export default User;
