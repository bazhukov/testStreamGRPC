import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { StreamingRequest } from "./streamingpb/stream_pb"
import { StreamingClient} from "./streamingpb/stream_grpc_web_pb"

var client = new StreamingClient('http://localhost:8040')

function App() {
  const [s1, setS1] = useState(-9999);
  const [s2 , setS2] = useState(-99999);

  const getStream1 = () => {
    console.log("called stream1")

    var streamingRequest = new StreamingRequest()
    var stream = client.stream1(streamingRequest,{})

    stream.on('data', function(response){
      setS1(response.getValue())
    });
  };

  const getStream2 = () => {
    console.log("called stream2")

    var streamingRequest = new StreamingRequest()
    var stream = client.stream2(streamingRequest,{})

    stream.on('data',function(response){
      setS2(response.getValue())
    })
  };

  useEffect(()=>{
    getStream1()
  },[]);
  useEffect(()=>{
    getStream2()
  },[]);

  return (
      <div>
        Stream1 value : {s1}
        <br/>
          Stream2 value : {s2}
      </div>
  );
}

export default App;
