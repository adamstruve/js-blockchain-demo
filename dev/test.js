const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: 1644085677953,
      transactions: [],
      nonce: 100,
      hash: "0",
      previousBlockHash: "0",
    },
    {
      index: 2,
      timestamp: 1644087231843,
      transactions: [],
      nonce: 18140,
      hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      previousBlockHash: "0",
    },
    {
      index: 3,
      timestamp: 1644087293809,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "57a6df1086b111ec94168f49372c4f67",
          transactionId: "f5da1c3086b411ec94168f49372c4f67",
        },
        {
          amount: 69,
          sender: "DFEEEJDJDddJJD",
          recipient: "AAAA484844S",
          transactionId: "06024f6086b511ec94168f49372c4f67",
        },
        {
          amount: 100,
          sender: "AKSKSJDJD",
          recipient: "DD",
          transactionId: "0d12a11086b511ec94168f49372c4f67",
        },
        {
          amount: 20,
          sender: "AKSKSJDJD",
          recipient: "DDDDDE3D",
          transactionId: "163d203086b511ec94168f49372c4f67",
        },
      ],
      nonce: 21901,
      hash: "00009a9ebc239783cbccdb2e8d7da4a49285052a3869a3d281c98f90b66f5f0b",
      previousBlockHash:
        "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    },
    {
      index: 4,
      timestamp: 1644087339120,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "57a6df1086b111ec94168f49372c4f67",
          transactionId: "1ac73c3086b511ec94168f49372c4f67",
        },
        {
          amount: 40,
          sender: "AKSKSJDJD",
          recipient: "DDDDDE3D",
          transactionId: "2b379bf086b511ec94168f49372c4f67",
        },
        {
          amount: 50,
          sender: "AKSKSJDJD",
          recipient: "DDDDDE3D",
          transactionId: "2cc20c8086b511ec94168f49372c4f67",
        },
        {
          amount: 60,
          sender: "AKSKSJDJD",
          recipient: "DDDDDE3D",
          transactionId: "2fd6c69086b511ec94168f49372c4f67",
        },
        {
          amount: 70,
          sender: "AKSKSJDJD",
          recipient: "DDDDDE3D",
          transactionId: "3216f29086b511ec94168f49372c4f67",
        },
      ],
      nonce: 129199,
      hash: "00004fc3f36c0da1673a7a7b61907871fb139f65bc8a67e8ae4fa9f2c7f890b9",
      previousBlockHash:
        "00009a9ebc239783cbccdb2e8d7da4a49285052a3869a3d281c98f90b66f5f0b",
    },
    {
      index: 5,
      timestamp: 1644087355670,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "57a6df1086b111ec94168f49372c4f67",
          transactionId: "35c94c3086b511ec94168f49372c4f67",
        },
      ],
      nonce: 14397,
      hash: "0000f19df17b7f2874428d8983ff4880155b04ee1016cfd8a4cb720796ff646d",
      previousBlockHash:
        "00004fc3f36c0da1673a7a7b61907871fb139f65bc8a67e8ae4fa9f2c7f890b9",
    },
    {
      index: 6,
      timestamp: 1644087358087,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "57a6df1086b111ec94168f49372c4f67",
          transactionId: "3fa6798086b511ec94168f49372c4f67",
        },
      ],
      nonce: 38503,
      hash: "0000f9e5adf000794c5f55d30bbfdd567f0fae1f2eed406614e7ac479fc4fe80",
      previousBlockHash:
        "0000f19df17b7f2874428d8983ff4880155b04ee1016cfd8a4cb720796ff646d",
    },
  ],
  prendingTransactions: [
    {
      amount: 12.5,
      sender: "00",
      recipient: "57a6df1086b111ec94168f49372c4f6",
      transactionId: "4117208086b511ec94168f49372c4f67",
    },
  ],
  currentNodeUrl: "http://localhost:3001",
  networkNodes: [],
};

console.log("VALID: ", bitcoin.chainIsValid(bc1.chain));
