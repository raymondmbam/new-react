// // App.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import ResponseComponent from './ResponseComponent';
// import  './App.css';
// import { IoSendOutline } from "react-icons/io5";
// import  mic from './assets/microphoneIcon.png';
// import  send from './assets/sendIcon.png';
// import { IconContext } from 'react-icons/lib';

// const apiKey = '{VF.DM.6598b6d3e77ab20007511023.xLl96EgCTVPcMuQL}';
// const userID = 'user_123';

// const App = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [outputValue, setOutputValue] = useState('');

//   const handleSendClick = async () => {
//     try {
//       // Send a launch request to start the conversation
//       await axios.post(
//         `https://general-runtime.voiceflow.com/state/user/${userID}/interact`,
//         {
//           launch: true,
//         },
//         {
//           headers: {
//             Authorization: 'VF.DM.6598b6d3e77ab20007511023.xLl96EgCTVPcMuQL',
//           },
//         }
//       );

//       // Send a text request with the user's input
//       const response = await axios.post(
//         `https://general-runtime.voiceflow.com/state/user/${userID}/interact`,
//         {
//           action: {
//             type: 'text',
//             payload: inputValue,
//           },
//           config: {
//             tts: true,
//             stripSSML: true,
//             stopAll: true,
//             excludeTypes: ['block', 'debug', 'flow'],
//           },
//         },
//         {
//           headers: {
//             Authorization: 'VF.DM.6598b6d3e77ab20007511023.xLl96EgCTVPcMuQL',
//           },
//         }
//       );

//       // Update the output with Voiceflow's response
//       // setOutputValue(response.data.message || 'No response from Voiceflow');
//       // console.log(response.data[1].payload.message); // Log the entire response to inspect its structure
//       console.log(response.data); // Log the entire response to inspect its structure
//       setOutputValue(response.data[1].payload.message || 'No response from Voiceflow');
//       setTimeout(() => {
//         // Display the second response
//         setOutputValue(response.data[2]?.payload?.message || 'No response from Voiceflow');
//       }, 1000);

//     } catch (error) {
//       console.error(error);
//     }
//   };

// //   return (
// //     <div className="app">
// //       <input
// //         type="text"
// //         value={inputValue}
// //         onChange={(e) => setInputValue(e.target.value)}
// //       />
// //       <button onClick={handleSendClick}>Send</button>
// //       <ResponseComponent response={outputValue} />
// //     </div>
// //   );
// // };
// return (
//   <div className="app">
    
//     <div className="textcomponent">

//     <button className="microphoneframe">
//       <img className="microphoneIcon" alt="" src={mic} />
//     </button>
//     <input
//       className="textinputframe"
//       id="textinput"
//       placeholder="You can say 'Exchange rate today'"
//       type="text"
//       value={inputValue}
//       onChange={(e) => setInputValue(e.target.value)}
//     />

//     <IconContext.Provider value={{ className: 'sendFrame', size: '30px' }}>
//     <button onClick={handleSendClick} className="sendIconFrame">
//       <IoSendOutline />
//       </button>
//     </IconContext.Provider>
//       </div>

//     {/* <ResponseComponent response={outputValue} /> */}
//   <div className="response-component">
//     <ResponseComponent response={outputValue}/>
//     </div>
//     </div>
// );

// };


// export default App;

// App.js
import React, { useState } from 'react';
import axios from 'axios';
import ResponseComponent from './ResponseComponent';
import Savings from './pages/savings';
import { IoSendOutline } from 'react-icons/io5';
import mic from './assets/microphoneIcon.png';
import { IconContext } from 'react-icons/lib';

const voiceflowApiKey = 'VF.DM.6598b6d3e77ab20007511023.xLl96EgCTVPcMuQL'; // Replace with your actual Voiceflow API key
const openaiApiKey = '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'; // Replace with your actual OpenAI API key
const userID = 'user_123';

const speakResponseWithOpenAI = async (text) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/audio/speech',
      {
        model: 'tts-1',
        voice: 'alloy',
        input: text,
      },
      {
        headers: {
          Authorization: `Bearer ${openaiApiKey}`,
        },
      }
    );

    // Assuming OpenAI returns a file URL
    const audioFileUrl = response.data.url;

    // Play the audio
    const audio = new Audio(audioFileUrl);
    audio.play();
  } catch (error) {
    if (error.response && error.response.status === 429) {
      // If rate-limited, wait for 4 minutes before retrying
      console.log('Rate limited. Retrying after 4 minutes...');
      await new Promise((resolve) => setTimeout(resolve, 4 * 60 * 1000));
      speakResponseWithOpenAI(text);
    } else {
      console.error('Error with OpenAI TTS:', error);
    }
  }
};

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleSendClick = async () => {
    try {
      // Send a launch request to start the conversation
      await axios.post(
        `https://general-runtime.voiceflow.com/state/user/${userID}/interact`,
        {
          launch: true,
        },
        {
          headers: {
            Authorization: voiceflowApiKey,
          },
        }
      );

      // Send a text request with the user's input
      const response = await axios.post(
        `https://general-runtime.voiceflow.com/state/user/${userID}/interact`,
        {
          action: {
            type: 'text',
            payload: inputValue,
          },
          config: {
            tts: true,
            stripSSML: true,
            stopAll: true,
            excludeTypes: ['block', 'debug', 'flow'],
          },
        },
        {
          headers: {
            Authorization: voiceflowApiKey,
          },
        }
      );

      // Update the output with Voiceflow's response
      setOutputValue(response.data[1]?.payload?.message || 'No response from Voiceflow');

      // Speak out the response using OpenAI's TTS
      speakResponseWithOpenAI(response.data[1]?.payload?.message);

      // Use a timeout to speak out the second response, if available
      setTimeout(() => {
        setOutputValue(response.data[2]?.payload?.message || 'No response from Voiceflow');
        speakResponseWithOpenAI(response.data[2]?.payload?.message);
      }, 1000);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <Savings />
      <div className="textcomponent">
        <button className="microphoneframe">
          <img className="microphoneIcon" alt="" src={mic} />
        </button>
        <input
          className="textinputframe"
          id="textinput"
          placeholder="You can say 'Exchange rate today'"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <IconContext.Provider value={{ className: 'sendFrame', size: '30px' }}>
          <button onClick={handleSendClick} className="sendIconFrame">
            <IoSendOutline />
          </button>
        </IconContext.Provider>
      </div>
      <div className="response-component">
        <ResponseComponent response={outputValue}/>
      </div>
    </div>
  );
};

export default App;
