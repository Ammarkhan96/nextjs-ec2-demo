import Image from "next/image";

export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Next.js CI/CD Demo 🚀</h1>
      <p>Auto deployed using GitHub Actions</p>
      <p>This is the demo Deployment through EC2 instance....</p>
      <p>EC2 Github Action</p>
    </main>
  );
}
