"use server"
import { ChatGroq } from "@langchain/groq";
import { InMemoryChatMessageHistory } from "@langchain/core/chat_history";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableWithMessageHistory } from "@langchain/core/runnables";
import { HumanMessage } from "@langchain/core/messages";
import { AIMessage } from "@langchain/core/messages";
import { GoogleGenAI } from "@google/genai";
import { Collage_Rules } from "./Rules";
/**
 @notice utils folder
 @dev This folder includes all the backend specific code for our application
 @dev We can create different files for backend code for our specific feature
 @notice This method of writing backend code is efficient and easy to understand
 */



// THIS IS THE FUNCTION REQUIRED TO ASK QUESTION TO AI AND GET RESPONSE. 
async function chatResponse(prompt: string) {
  // Access your API key as an environment variable
  try {
    // Choose a model that's appropriate for your use case.
    const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_API});
    const modelPrompt = `These are The Rules and Regulation of my Collage \n ${Collage_Rules}. \n Please Respond to the following Question : ${prompt} based on the Rules and Regulation shared Above.Please Provide the Concise and to the point answer and if the User asks something out from the Rules , just say "This Is Out of my Knowlede"`
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: modelPrompt,
    });
    return response.text;
  }
  catch (error) {
    return "We are Having Error Getting result,Please Try again";
  }
};



async function langchainChatResponse(text: string) {
  try {
    // LANGUAGE MODEL TO BE USED.
    const model = new ChatGroq({
      model: "mixtral-8x7b-32768",
      temperature: 0
    });
    // THIS IS AN JS OBJECT WHICH WILL STORE OUR MESSAGE HISTORY.
    const messageHistories: Record<string, InMemoryChatMessageHistory> = {};

    // THIS IS OUR TEMPLATE TO GENERATE THE RESPONSE.
    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        `You are a helpful assistant who remembers all details the user shares with you.`,
      ],
      ["placeholder", "{chat_history}"],
      ["human", "{input}"],
    ]);

    // THIS IS USED TO CONNECT OUR LLM MODEL WITH OUTPUT PARSER
    const chain = prompt.pipe(model);

    // HERE WE CAN PROVIDE SPECIFIC DETAILS RELATED TO US OR FOR THIS APP.
    const messages = [
      new HumanMessage({ content: "hi! I'm anurag" }),
      new AIMessage({ content: "hi!" }),
    ];

    // THIS FUNCTION WILL ENCODE THE RESPONSE FROM AI AS WELL THE INPUT FROM USER. THIS FUNC REQUIRED THE SESSION ID.
    const withMessageHistory = new RunnableWithMessageHistory({
      runnable: chain,
      getMessageHistory: async (sessionId) => {
        if (messageHistories[sessionId] === undefined) {
          const messageHistory = new InMemoryChatMessageHistory();
          await messageHistory.addMessages(messages);
          messageHistories[sessionId] = messageHistory;
        }
        return messageHistories[sessionId];
      },
      inputMessagesKey: "input",
      historyMessagesKey: "chat_history",
    });


    // IF WE HAVE AN APP WHICH OPERATES MULTIPLE USER IN SAME APP. WE CAN SAVE THEIR HISTORY WITH THE UNIQUE SESSION ID.
    const config = {
      configurable: {
        sessionId: "abc2",
      },
    };


    // HERE, WE WILL GET THE RESPONSE FROM AI.
    const response = await withMessageHistory.invoke(
      {
        input: text,
      },
      config
    );
    console.log(response.content);
    return (response.content);
  }
  catch (error) {
    console.log(error);

  };


};

// Function to Get The Resume ATS Score Form the Model
async function GetResumeATS_Score(ResumeText){
  try{
    const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_API});
    const prompt = `This is the text of my prase Reusme \n ${ResumeText}. \n Only provide the Numerical score out of 100 and Nothing Else.`
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    const answer = `The ATS Score of Your Resume is ${response.text}`
    return answer;
  }catch(e){
    return "Error Getting Your Resume Score, Please Try After Some time";
  }
}


export { chatResponse, langchainChatResponse,GetResumeATS_Score };