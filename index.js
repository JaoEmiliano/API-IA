require('dotenv').config();
const readLine = require('readline');
const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

async function getOpenAIResponse(prompt) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7
        });
        console.log(response.choices[0].message.content);
    } catch (error) {
        console.error('Erro ao chamar OpenAI API:', error.response?.data || error.message);
    }
}

getOpenAIResponse("Explique de forma detalhada, e, precisa, o que foi o auge do imperio Bizantino. Também, forneça detalhes de como foi e como ocorreu sua ascencao")

// const rl = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question("Digite a sua pergunta: ", (pergunta) => {
//     getOpenAIResponse(pergunta);
//     rl.close();
// }) continuar dps

