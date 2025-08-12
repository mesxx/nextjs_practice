"use client";

import { useParams, useSearchParams } from "next/navigation";

const BlogDetail = () => {
  const params = useParams();
  const search = useSearchParams();
  const queryData = search?.get("data");

  return (
    <div>
      <p>Welcome {params?.id}!</p>
      <p>Welcome {queryData}!</p>
    </div>
  );
};

export default BlogDetail;

// const BlogDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
//   const { id } = await params;
//   return (
//     <div>
//       <p>Welcome {id}!</p>
//     </div>
//   );
// };

// export default BlogDetail;
