import Array "mo:base/Array";

actor ContactForm {
  public type Message = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  stable var messages : [Message] = [];

  public func submit(msg : Message) : async Text {
    messages := Array.append<Message>(messages, [msg]);
    return "Message received. Thank you!";
  };

  public query func getMessages() : async [Message] {
    return messages;
  }
}
