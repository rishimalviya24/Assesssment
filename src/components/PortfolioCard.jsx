export default function PortfolioCard({ item }) {
  return (
    <div style={{ width:'100%' }}>
      {/* Meta row */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10, paddingTop:4 }}>
        <span style={{ fontSize:10, fontWeight:700, letterSpacing:'0.08em', color:'rgba(255,255,255,0.5)', fontFamily:'Switzer,sans-serif', textTransform:'uppercase' }}>
          {item.cat}
        </span>
        <span style={{ fontSize:10, color:'rgba(255,255,255,0.35)', fontFamily:'Switzer,sans-serif' }}>
          {item.year}
        </span>
      </div>

      {/* Image */}
      <div style={{ width:'100%', aspectRatio:'4/3', overflow:'hidden', background:'#111', marginBottom:10 }}>
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
          style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', transition:'transform 0.4s ease' }}
          onMouseEnter={e => e.currentTarget.style.transform='scale(1.04)'}
          onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
        />
      </div>

      {/* Title */}
      <div style={{ fontSize:12, fontWeight:700, letterSpacing:'0.04em', color:'#fff', fontFamily:'Switzer,sans-serif', textTransform:'uppercase' }}>
        {item.title}
      </div>
    </div>
  );
}
