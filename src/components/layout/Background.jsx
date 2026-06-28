export default function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[#030712]" />

      <div className="fixed top-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[150px]" />

      <div className="fixed right-0 top-40 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[150px]" />

      <div
        className="fixed inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
    </>
  );
}