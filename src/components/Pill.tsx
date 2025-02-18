interface Props {
  title: string;
  value: string;
}

export const Pill = ({ title, value }: Props) => {
  return (
    <div className="row pill-container">
      <h4>{title}</h4>
      <div className="pill-divider"></div>
      <p>{value}</p>
    </div>
  );
};
