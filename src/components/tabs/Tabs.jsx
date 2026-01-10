import './Tabs.css';

export default function Tabs({ tabs, setActiveTab, activeTab }) {
  console.log(tabs);
  return (
  <div className='tabs'>
    {tabs.map((tab, index) => (
    <div key={index} className={activeTab === index ? "active-tab" : ""} onClick={()=>tabs[activeTab].validate()&&setActiveTab(index)}>
      {tab.name}
    </div>
    ))}
  </div>
  )
}
