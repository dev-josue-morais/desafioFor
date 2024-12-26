
let contatoImpres = document.querySelector(".contatoInpress");
let erro = document.querySelector(".erro");
let inputNew = document.querySelector("input");
const button = document.querySelector("button")

inputNew.addEventListener("input", function (event) {
    let input = event.target;
    input.value = input.value
        .split(' ')
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join(' ');
});

const contacts = [
    { name: "Rodolfo Rodrigues", number: "64 9 9215-4876" },
    { name: "Paulo Silva", number: "11 9 9275-4504" },
    { name: "Aline Amaral", number: "61 9 9314-4538" },
    { name: "Maria Aparecida", number: "62 9 9212-7836" },
    { name: "Maria", number: "21 9 9032-5679" },
    { name: "João", number: "59 9 9029-2579" },
    { name: "Ana", number: "48 9 9871-3953" },
    { name: "Pedro", number: "20 9 9715-7914" },
    { name: "Carlos", number: "34 9 9918-6385" },
    { name: "Francisco", number: "69 9 9493-4337" },
    { name: "Paulo", number: "71 9 9364-2028" },
    { name: "Gabriel", number: "87 9 9521-5259" },
    { name: "Luiza", number: "90 9 9591-1754" },
    { name: "Mariana", number: "59 9 9030-5657" },
    { name: "Rafael", number: "17 9 9957-6169" },
    { name: "Fernanda", number: "14 9 9275-5416" },
    { name: "José", number: "87 9 9416-7884" },
    { name: "Lucas", number: "35 9 9895-2122" },
    { name: "Clara", number: "37 9 9819-8106" },
    { name: "Thiago", number: "81 9 9754-9826" },
    { name: "Juliana", number: "77 9 9228-1431" },
    { name: "Rodrigo", number: "72 9 9713-9492" },
    { name: "Aline", number: "85 9 9633-4195" },
    { name: "Ricardo", number: "15 9 9987-9568" },
    { name: "Beatriz", number: "91 9 9121-9105" },
    { name: "Sandra", number: "29 9 9810-9722" },
    { name: "Victor", number: "86 9 9160-4636" },
    { name: "Bruno", number: "55 9 9998-1239" },
    { name: "Adriana", number: "27 9 9810-7716" },
    { name: "Larissa", number: "35 9 9724-6643" },
    { name: "Arthur", number: "22 9 9270-2380" },
    { name: "Isabela", number: "45 9 9829-1456" },
    { name: "Mateus", number: "50 9 9652-3549" },
    { name: "Henrique", number: "32 9 9485-9854" },
    { name: "Rafaela", number: "33 9 9246-1538" },
    { name: "Camila", number: "24 9 9192-4216" },
    { name: "Daniel", number: "92 9 9420-9971" },
    { name: "Patrícia", number: "97 9 9204-8687" },
    { name: "Luan", number: "35 9 9946-4197" },
    { name: "Débora", number: "11 9 9368-2950" },
    { name: "Vinícius", number: "71 9 9533-6423" },
    { name: "Tereza", number: "71 9 9635-1787" },
    { name: "Raimundo", number: "54 9 9407-6731" },
    { name: "Joana", number: "67 9 9935-4045" },
    { name: "Cristina", number: "62 9 9452-3946" },
    { name: "Helena", number: "71 9 9835-9429" },
    { name: "Marcelo", number: "65 9 9415-4220" },
    { name: "Sérgio", number: "54 9 9591-868" },
    { name: "André", number: "39 9 9025-5365" },
    { name: "Fabiana", number: "22 9 9875-8613" },
    { name: "Otávio", number: "45 9 9723-5839" },
    { name: "Leonardo", number: "77 9 9296-6785" },
    { name: "Renata", number: "21 9 9421-8947" },
    { name: "Samuel", number: "73 9 9402-9136" },
    { name: "Antônio", number: "80 9 9503-9176" },
    { name: "Roberta", number: "32 9 9262-4750" },
    { name: "Eduardo", number: "61 9 9985-1059" },
    { name: "Gustavo", number: "28 9 9343-7435" },
    { name: "Elaine", number: "54 9 9293-6460" },
    { name: "Sophia", number: "77 9 9080-7053" },
    { name: "Miguel", number: "51 9 9398-847" },
    { name: "Alice", number: "42 9 9935-6156" },
    { name: "Heitor", number: "14 9 9715-5396" },
    { name: "Laura", number: "36 9 9635-5234" },
    { name: "Manuela", number: "26 9 9618-6302" },
    { name: "Davi", number: "27 9 9518-7057" },
    { name: "Emanuel", number: "46 9 9610-504" },
    { name: "Marcos", number: "62 9 9878-178" },
    { name: "Claudia", number: "88 9 9444-6480" },
    { name: "Nicolas", number: "89 9 9850-5883" },
    { name: "Flávia", number: "94 9 9839-1328" },
    { name: "Antônia", number: "56 9 9947-598" },
    { name: "Lívia", number: "35 9 9677-8994" },
    { name: "Danilo", number: "72 9 9090-9196" },
    { name: "Érica", number: "80 9 9109-2484" },
    { name: "Renan", number: "13 9 9076-1755" },
    { name: "Vera", number: "75 9 9157-8488" },
    { name: "Amanda", number: "26 9 9661-8291" },
    { name: "Diego", number: "54 9 9754-6684" },
    { name: "Melissa", number: "23 9 9093-3361" },
    { name: "Carla", number: "35 9 9599-1328" },
    { name: "Fábio", number: "48 9 9470-2291" },
    { name: "Vitor", number: "59 9 9900-2789" },
    { name: "Júlio", number: "58 9 9925-9386" },
    { name: "Tatiane", number: "98 9 9673-4371" },
    { name: "Álvaro", number: "98 9 9708-9954" },
    { name: "Cristiane", number: "76 9 9188-3876" },
    { name: "Enzo", number: "65 9 9353-1455" },
    { name: "Sarah", number: "67 9 9945-6026" },
    { name: "John", number: "88 9 9753-1480" },
    { name: "Mary", number: "24 9 9836-2116" },
    { name: "Robert", number: "80 9 9376-4154" },
    { name: "Linda", number: "44 9 9714-2040" },
    { name: "Michael", number: "36 9 9404-9063" },
    { name: "Elizabeth", number: "80 9 9213-9975" },
    { name: "William", number: "80 9 9107-1001" },
    { name: "Barbara", number: "57 9 9807-7340" },
    { name: "James", number: "76 9 9039-2311" },
    { name: "Susan", number: "85 9 9064-3753" },
    { name: "David", number: "43 9 9931-97" },
    { name: "Jessica", number: "30 9 9833-4036" },
    { name: "Richard", number: "65 9 9866-5411" },
    { name: "Karen", number: "43 9 9882-8447" },
    { name: "Joseph", number: "40 9 9521-6602" },
    { name: "Nancy", number: "82 9 9217-9155" },
    { name: "Thomas", number: "34 9 9254-5234" },
    { name: "Lisa", number: "77 9 9737-6687" },
    { name: "Charles", number: "45 9 9716-3337" },
    { name: "Margaret", number: "67 9 9645-2018" },
    { name: "Christopher", number: "73 9 9575-6453" },
    { name: "Ashley", number: "53 9 9024-1522" },
    { name: "Daniel", number: "53 9 9250-3668" },
    { name: "Emily", number: "13 9 9149-2335" },
    { name: "Matthew", number: "95 9 9803-4220" },
    { name: "Laura", number: "85 9 9719-3843" },
    { name: "Andrew", number: "14 9 9235-2514" },
    { name: "Sarah", number: "92 9 9556-4271" },
    { name: "Paul", number: "58 9 9743-156" },
    { name: "Kimberly", number: "81 9 9278-1094" },
    { name: "Lukac's", number: "20 9 9260-9633" },
    { name: "Agnaldo", number: "89 9 9746-743" },
    { name: "Alex", number: "82 9 9421-6905" },
    { name: "Hugo", number: "91 9 9211-6634" },
    { name: "Fabio", number: "21 9 9328-7643" },
    { name: "Hellen", number: "86 9 9550-2173" },
    { name: "Josue", number: "67 9 9881-3474" },
    { name: "Jairo", number: "46 9 9224-6895" },
    { name: "Lidia", number: "14 9 9961-3804" },
    { name: "Matildes", number: "58 9 9881-2794" },
    { name: "Josino", number: "58 9 9846-962" },
    { name: "Tania", number: "61 9 9215-1824" },
    { name: "Cecilia", number: "64 9 9351-868" },
    { name: "Vitoria", number: "45 9 9894-3529" },
    { name: "Victoria", number: "37 9 9844-1592" },
    { name: "Adriano", number: "78 9 9110-5501" },
    { name: "Augusto", number: "28 9 9187-6895" },
    { name: "Sebastião", number: "72 9 9130-5324" },
    { name: "Renato", number: "37 9 9310-8932" },
    { name: "Geraldo", number: "39 9 9499-5314" },
    { name: "Clóvis", number: "16 9 9999-3972" },
    { name: "Mauro", number: "23 9 9532-8697" },
    { name: "Edson", number: "44 9 9659-266" },
    { name: "Valter", number: "86 9 9625-389" },
    { name: "Wellington", number: "73 9 9649-961" },
    { name: "Anderson", number: "62 9 9342-846" },
    { name: "Jair", number: "18 9 9169-9885" },
    { name: "Leandro", number: "51 9 9253-746" },
    { name: "Wallace", number: "44 9 9662-3576" },
    { name: "Édgar", number: "84 9 9386-9172" },
    { name: "Everton", number: "44 9 9369-9469" },
    { name: "Márcio", number: "75 9 9894-5299" },
    { name: "Osvaldo", number: "93 9 9603-7985" },
    { name: "Silvio", number: "25 9 9841-1024" },
    { name: "Aparecida", number: "75 9 9588-7513" },
    { name: "Neusa", number: "77 9 9150-5481" },
    { name: "Marlene", number: "83 9 9380-3165" },
    { name: "Dalva", number: "48 9 9243-5682" },
    { name: "Silvana", number: "61 9 9903-7045" },
    { name: "Nádia", number: "41 9 9748-8215" },
    { name: "Rosângela", number: "80 9 9409-2899" },
    { name: "Graça", number: "73 9 9130-5303" },
    { name: "Ivone", number: "69 9 9822-960" },
    { name: "Cleide", number: "47 9 9181-8610" },
    { name: "Sônia", number: "25 9 9142-6178" },
    { name: "Cíntia", number: "59 9 9528-8981" },
    { name: "Janete", number: "72 9 9757-8739" },
    { name: "Jussara", number: "15 9 9690-7221" },
    { name: "Selma", number: "20 9 9030-7319" },
    { name: "Ivani", number: "41 9 9454-3020" },
    { name: "Lourdes", number: "70 9 9296-4497" },
    { name: "Lucélia", number: "18 9 9338-1327" }
];

button.addEventListener("click", () => {
    erro.style.display = "none";
    contatoImpres.style.display = "none";
    const searchName = inputNew.value;
    let result = null;

    // Usando o loop for para buscar o contato
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].name === searchName) {
            result = contacts[i];
            break; // Sai do loop quando encontrar
        }
    }

    if (result) {
        contatoImpres.style.display = "block";
        contatoImpres.innerHTML = `Nome = ${result.name}<br> Telefone = ${result.number}`;
    } else {
        erro.style.display = "block";
        erro.innerHTML = `Contato não encontrado.`;
    }
});