import React from 'react'
function Aside({children,estilos}) {
  return (
    <aside className={`hidden lg:block my-3 ${estilos} `}>
      {children}
    </aside>
  )
}

export default Aside