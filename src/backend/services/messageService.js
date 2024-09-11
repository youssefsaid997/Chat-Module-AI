import Coversation from "../models/Conversation";

/**
 * @function getConversations
 * @params
 * @returns Array of all conversations
 */

export async function getConversations() {
  const conversations = await Coversation.find({});

  return conversations;
}
