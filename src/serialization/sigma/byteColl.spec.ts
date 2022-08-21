import { ByteColl } from "./byteColl";

describe("ByteColl type", () => {
  const testVectorsFromExplorer = [
    {
      encoded:
        "0e4846656d616c65202330352e20506f702061727420706f727472616974206f662061206769726c2e203430303078343030302070782e20417574686f7220406d617269747361617274",
      decoded: "Female #05. Pop art portrait of a girl. 4000x4000 px. Author @maritsaart"
    },
    {
      encoded: "0e0a46656d616c6520233035",
      decoded: "Female #05"
    },
    {
      encoded: "0e0130",
      decoded: "0"
    },
    {
      encoded: "0e064572676f6c64",
      decoded: "Ergold"
    },
    {
      encoded:
        "0efe0b476f6c6420686173206265656e20612073746f7265206f66207765616c746820666f722074686f7573616e6473206f6620796561727320616e6420686173206f75746c6173746564207468652063757272656e63696573206f6620766172696f757320656d706972657320616e64206e6174696f6e2d7374617465732074686174206861766520636f6d6520616e6420676f6e652e20497420697320657374696d6174656420746861742077652068617665206c657373207468616e2035352c30303020746f6e73206f6620676f6c64206c65667420746f20646973636f7665722e20476f6c64206d696e696e67206973206f6e65206f6620746865206d6f737420646573747275637469766520696e647573747269657320696e2074686520776f726c642e2049742063616e20646973706c61636520636f6d6d756e69746965732c20636f6e74616d696e617465206472696e6b696e672077617465722c206875727420776f726b6572732c20616e642064657374726f79207072697374696e6520656e7669726f6e6d656e74732e20497420706f6c6c7574657320776174657220616e64206c616e642077697468206d65726375727920616e64206379616e6964652c20656e64616e676572696e6720746865206865616c7468206f662070656f706c6520616e642065636f73797374656d732e0a4f757220556e6465727374616e64696e67206f66206120547261646974696f6e616c20417373657420486173204368616e6765642e0a416e20617373657420697320616e797468696e67206f662076616c7565206f722061207265736f75726365206f662076616c756520746861742063616e20626520636f6e76657274656420696e746f20636173682e20536f20616e206173736574e28099732076616c75652077696c6c20646570656e64206f6e2074686520636f6c6c6563746976652062656c69656620616e64207472757374206f66207468652070656f706c65206465616c696e6720776974682069742e200a5468652067726f77746820696e20746865206e756d626572206f662063727970746f63757272656e63696573206973206368616e67696e6720616c6c206f6620746869732c20616e642074686520666169746820706c6163656420696e207468656d20627920696e766573746f72732069732064726976696e6720636f6e666964656e636520696e207468656d20617320616e20617373657420636c6173732e20496620696e766573746f727320636f6e74696e756520746f2062656c6965766520696e207468652076616c7565206f6620676f6c642062656361757365206f74686572732062656c6965766520696e2069742c2069742077696c6c2072656d61696e20616e2061737365742e2054686520646966666572656e6365206265747765656e2063727970746f63757272656e6369657320746f64617920616e6420676f6c6420696e207468652070617374206973207468657265666f7265206d696e696d616c2e0a4974206973206e6f74206120736563726574207468617420426974636f696e20697320746865206d6f73742076616c75656420616e64207468657265627920617474726163746976652063727970746f63757272656e6379206f6e20746865206d61726b65742e20457870657274732068617665206c617267656c79206372656469746564207468697320746f206974732073636172636974792e200a536361726369747920696e63726561736573207468652076616c7565206f6620616e2061737365742c207468657265666f726520746865204572676f6c64207175616e74697479206973737565642077696c6c20626520636170706564206174203535206d696c6c696f6e2e20546865206e756d626572206f66206b696c6f6772616d73206f6620676f6c64206c65667420746f20626520646973636f76657265642e200a4c65742773207265647563652074686520656e7669726f6e6d656e74616c20696d7061637420616e64206d616b652069747320707261637469636573206d6f7265207375737461696e61626c6520776974682074686520626c6f636b636861696e20746563686e6f6c6f67792e",
      decoded:
        "Gold has been a store of wealth for thousands of years and has outlasted the currencies of various empires and nation-states that have come and gone. It is estimated that we have less than 55,000 tons of gold left to discover. Gold mining is one of the most destructive industries in the world. It can displace communities, contaminate drinking water, hurt workers, and destroy pristine environments. It pollutes water and land with mercury and cyanide, endangering the health of people and ecosystems.\nOur Understanding of a Traditional Asset Has Changed.\nAn asset is anything of value or a resource of value that can be converted into cash. So an asset’s value will depend on the collective belief and trust of the people dealing with it. \nThe growth in the number of cryptocurrencies is changing all of this, and the faith placed in them by investors is driving confidence in them as an asset class. If investors continue to believe in the value of gold because others believe in it, it will remain an asset. The difference between cryptocurrencies today and gold in the past is therefore minimal.\nIt is not a secret that Bitcoin is the most valued and thereby attractive cryptocurrency on the market. Experts have largely credited this to its scarcity. \nScarcity increases the value of an asset, therefore the Ergold quantity issued will be capped at 55 million. The number of kilograms of gold left to be discovered. \nLet's reduce the environmental impact and make its practices more sustainable with the blockchain technology."
    },
    {
      encoded: "0e0e4572676f61747320233030333436",
      decoded: "Ergoats #00346"
    },
    {
      encoded:
        "0e9a027b22373231223a7b226572676f61742d3030333436223a7b22696e646578223a3334362c2267656e65726174696f6e223a312c226261636b67726f756e64223a2250737963686f222c226261636b5f6163636573736f7279223a22477265656e20506172726f74222c22626f6479223a22507572706c65222c22636c6f74686573223a225768697465204552476f6174205368697274222c226d6f757468223a2247726974746564205465657468222c2265796573223a22416e67727920526564222c227769656c64223a225370697269742047756e222c226163636573736f7279223a2253696c766572204d6564616c222c2268656164223a22436f77626f7920486174222c2265617272696e67223a224e6f6e65227d7d7d",
      decoded:
        '{"721":{"ergoat-00346":{"index":346,"generation":1,"background":"Psycho","back_accessory":"Green Parrot","body":"Purple","clothes":"White ERGoat Shirt","mouth":"Gritted Teeth","eyes":"Angry Red","wield":"Spirit Gun","accessory":"Silver Medal","head":"Cowboy Hat","earring":"None"}}}'
    }
  ];
  it("Should encode", () => {
    testVectorsFromExplorer.forEach((tv) =>
      expect(new ByteColl(Buffer.from(tv.decoded, "utf-8")).toString()).toEqual(tv.encoded)
    );
  });
});
