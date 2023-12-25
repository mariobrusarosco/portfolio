import Image from "next/image";

const NotFoundScreen = () => {
  return (
    <div className="error h-screen w-screen">
      <h1>404</h1>
      <p>This page does not exist</p>
      return <Image src="/mario.jpeg" alt="me" width="400" height="400" />
    </div>
  );
};

export default NotFoundScreen;
