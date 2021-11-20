const Section = ({ title, children }) => {
  return (
    <div className="flex flex-col items-start">
      <h1 className="mb-4 font-medium">{title}</h1>
      {children}
    </div>
  )
}

export default Section