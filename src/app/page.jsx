export const metadata = {
  title: "We’ll be back soon",
  description:
    "Mamamia Cards is temporarily unavailable while we make some improvements. Please check back a bit later."
};

export default function MaintenancePage() {
  return (
    <main
      className="d-flex align-items-center justify-content-center min-vh-100 bg-light text-center"
      style={{
        padding: "2rem"
      }}
    >
      <div className="container" style={{ maxWidth: 640 }}>
        <h1 className="fw-bold mb-3" style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)" }}>
          We&apos;re getting things ready
        </h1>
        <p className="mb-4 text-muted" style={{ fontSize: "1.05rem" }}>
          Mamamia Cards is currently undergoing a quick update.
          <br />
          Please check back a bit later.
        </p>
        <p className="small text-muted mb-0">Thanks for your patience and for learning with us.</p>
      </div>
    </main>
  );
}

