
import './App.css';


function App(imgData) {
  // code here

  const images = imgData.imgData;
  console.log(images);
 return (
 <div>
  <h1>Kalvium Gallery</h1>
  <div id='grid'>
    {/* <img src={images[0].img} alt="" id={images[0].id} /> */}
    
    {images.map((element) => (
      <img src={element.img} id={element.id}/>
    ))};
 </div>
 </div>
 )
}

export default App;