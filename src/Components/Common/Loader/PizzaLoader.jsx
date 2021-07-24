import React from "react"
import ContentLoader from "react-content-loader"

const PizzaLoader = () => {
   return (
      <ContentLoader
         className="pizza-block"
         speed={2}
         width={280}
         height={487}
         viewBox="0 0 280 487"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
      >
         <circle cx="140" cy="140" r="140" />
         <rect x="10" y="353" rx="10" ry="10" width="260" height="70" />
         <rect x="17" y="446" rx="0" ry="0" width="90" height="32" />
         <rect x="120" y="439" rx="20" ry="20" width="150" height="46" />
         <rect x="9" y="295" rx="0" ry="0" width="260" height="36" />
      </ContentLoader>
   )
}

export default PizzaLoader
