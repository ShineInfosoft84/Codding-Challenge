import React from 'react';
import './App.css';
import data from "./data.json"

function App() {
  const carCount:any = {}
  const uniqueModel:any = [];
  const modelCount:any = {};
  data.data.forEach(function(car:any) {
    carCount[car.Make] = (carCount[car.Make] || 0) + 1;
    modelCount[car["Vehicle Class"]] = (modelCount[car["Vehicle Class"]] || 0) + 1;
    if (!uniqueModel.includes(car.Model)) {
      uniqueModel.push(car.Model);
    }
  })
  const carMakePer = { "AUDI": Math.ceil((carCount["AUDI"] * 100) / 700), "JAGUAR": Math.ceil((carCount["JAGUAR"] * 100) / 700) }
  const carModelPer = { "COMPACT": Math.ceil((modelCount["COMPACT"] * 100) / 700), "FULL-SIZE": Math.ceil((modelCount["FULL-SIZE"] * 100) / 700) }

  return (
    <div className="App">
      <div className='d-flex flex-row border-bottom pb-1'>
        <div className='d-flex-column w-50 p-1'>
          <span className='font-20 font-bold'>Make</span>
          <span className='py-1'>Company of the vehicle</span>
          <div className='d-flex justify-content-between'>
            <span>AUDI</span>
            <span>{carMakePer.AUDI}%</span>
          </div>
          <div className='py-1 d-flex justify-content-between'>
            <span>JAGUAR</span>
            <span>{carMakePer.JAGUAR}%</span>
          </div>
          <div className='d-flex justify-content-between font-blur'>
            <span>Other ({700 - (carCount.AUDI + carCount.JAGUAR)})</span>
            <span>{100 - (carMakePer.AUDI + carMakePer.JAGUAR)}%</span>
          </div>
        </div>
        <div className='devider mt-5'></div>
        <div className='mt-5 w-50 border-top-green m-1'>
          <div className='d-flex justify-content-between border-bottom'>
            <span className='d-flex align-items-center'>Valid<div className='mx-2 color-box-lime'> </div></span>
            <div className='w-15 d-flex justify-content-between'>
              <span>{data.data.length}</span><span className='font-blur'>100%</span>
            </div>
          </div>
          <div className='d-flex justify-content-between border-bottom'>
            <span className='d-flex align-items-center'>Mismatched<div className='mx-2 color-box-orange'> </div></span>
            <div className='w-15 d-flex justify-content-between'>
              <span>0</span><span className='font-blur'>0%</span>
            </div>
          </div>
          <div className='d-flex justify-content-between border-bottom'>
            <span className='d-flex align-items-center'>Missing<div className='mx-2 color-box-red'> </div></span>
            <div className='w-15 d-flex justify-content-between'>
              <span>0</span><span className='font-blur'>0%</span>
            </div>
          </div>
          <div className='d-flex justify-content-between border-bottom'>
            <span>Unique</span>
            <div className='w-15 d-flex justify-content-between'>
              <span>{Object.keys(carCount).length}</span>
            </div>
          </div>
          <div className='d-flex justify-content-between'>
            <span>Most Common</span>
            <div className='w-15 d-flex justify-content-between'>
              <span>AUDI</span><span className='font-blur'>{carMakePer.AUDI}%</span>
            </div>
          </div>
        </div>
      </div>
      <div className='d-flex flex-row border-bottom pb-1'>
        <div className='d-flex-column w-50 p-1'>
          <span className='font-20 font-bold'>Model</span>
          <span className='py-1'>Car Model</span>
          <h1 className='mt-2 h1'>{uniqueModel.length}</h1>
          <span className='font-20 font-bold'>Unique Value</span>
        </div>
        <div className='devider mt-5'></div>
        <div className='mt-5 w-50 border-top-green m-1'>
          <div className='d-flex justify-content-between border-bottom'>
            <span className='d-flex align-items-center'>Valid<div className='mx-2 color-box-lime'> </div></span>
            <div className='w-15 d-flex justify-content-between'>
              <span>{data.data.length}</span><span className='font-blur'>100%</span>
            </div>
          </div>
          <div className='d-flex justify-content-between border-bottom'>
            <span className='d-flex align-items-center'>Mismatched<div className='mx-2 color-box-orange'> </div></span>
            <div className='w-15 d-flex justify-content-between'>
              <span>0</span><span className='font-blur'>0%</span>
            </div>
          </div>
          <div className='d-flex justify-content-between border-bottom'>
            <span className='d-flex align-items-center'>Missing<div className='mx-2 color-box-red'> </div></span>
            <div className='w-15 d-flex justify-content-between'>
              <span>0</span><span className='font-blur'>0%</span>
            </div>
          </div>
          <div className='d-flex justify-content-between border-bottom'>
            <span>Unique</span>
            <div className='w-15 d-flex justify-content-between'>
              <span>198</span>
            </div>
          </div>
          <div className='d-flex justify-content-between'>
            <span>Most Common</span>
            <div className='w-15 d-flex justify-content-between'>
              <span>RS 5 CABRIOLET</span><span className='font-blur'>4%</span>
            </div>
          </div>
        </div>
      </div>
      <div className='d-flex flex-row'>
        <div className='d-flex-column w-50 p-1'>
          <span className='font-20 font-bold'>Vehicle Class</span>
          <span className='py-1'>Class of vehicle depending on their utility,capacity and weight</span>
          <div className='d-flex justify-content-between'>
            <span>COMPACT</span>
            <span>{carModelPer.COMPACT}%</span>
          </div>
          <div className='py-1 d-flex justify-content-between'>
            <span>FULL-SIZE</span>
            <span>{carModelPer['FULL-SIZE']}%</span>
          </div>
          <div className='d-flex justify-content-between font-blur'>
            <span>Other ({700 - (modelCount.COMPACT + modelCount["FULL-SIZE"])})</span>
            <span>{100 - (carModelPer['FULL-SIZE'] + carModelPer.COMPACT)}%</span>
          </div>
        </div>
        <div className='devider mt-5'></div>
        <div className='mt-5 w-50 border-top-green m-1'>
          <div className='d-flex justify-content-between border-bottom'>
            <span className='d-flex align-items-center'>Valid<div className='mx-2 color-box-lime'> </div></span>
            <div className='w-15 d-flex justify-content-between'>
              <span>{data.data.length}</span><span className='font-blur'>100%</span>
            </div>
          </div>
          <div className='d-flex justify-content-between border-bottom'>
            <span className='d-flex align-items-center'>Mismatched<div className='mx-2 color-box-orange'> </div></span>
            <div className='w-15 d-flex justify-content-between'>
              <span>0</span><span className='font-blur'>0%</span>
            </div>
          </div>
          <div className='d-flex justify-content-between border-bottom'>
            <span className='d-flex align-items-center'>Missing<div className='mx-2 color-box-red'> </div></span>
            <div className='w-15 d-flex justify-content-between'>
              <span>0</span><span className='font-blur'>0%</span>
            </div>
          </div>
          <div className='d-flex justify-content-between border-bottom'>
            <span>Unique</span>
            <div className='w-15 d-flex justify-content-between'>
              <span>{Object.keys(modelCount).length}</span>
            </div>
          </div>
          <div className='d-flex justify-content-between'>
            <span>Most Common</span>
            <div className='w-15 d-flex justify-content-between'>
              <span>COMPACT</span><span className='font-blur'>{carModelPer.COMPACT}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
