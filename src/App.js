import './App.css';
import CustomBtn from './components/CustomBtn';

function App() {
  return (
    <div>
      <section className="screen outline">
        <div className="inner-screen">
                <div className="countdown">
                    <img src="assets/icon/clock.svg" alt="clock"/><span>1:49</span>
                    
                </div>
                <div className="num-question">
                    Question <span>2</span> of <span>10</span>
                </div>
                <div className="question">
                    <p>What is the question of this esxrdctfvgykbhjlkn jwzesxdrchf tgvjhkbjlkmlwze sxdrcfgvhbjnkmlsdxfcgv hbjnkml aszd
                    azsdfcgvhbjdbfshdgahh aggkjrewawfaw?</p>
                </div>
            <div className="screen__bottom">
            
            </div>
        </div>
    </section>
    <section className="options">
        <CustomBtn cname="option__button outline"> A. Option A</CustomBtn>
        <CustomBtn cname="option__button outline"> B. Option B</CustomBtn>
        <CustomBtn cname="option__button outline"> C. Option C</CustomBtn>
        <CustomBtn cname="option__button outline"> D. Option D</CustomBtn>
    </section>
    <section className="prev-next">
        <CustomBtn cname= "previous">Previous</CustomBtn>
        <CustomBtn cname= "next">Next</CustomBtn>
    </section>
    </div>
  );
}

export default App;
