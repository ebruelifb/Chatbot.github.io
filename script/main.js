
window.watsonAssistantChatOptions = {
    integrationID: "2fdf0ad6-3aa2-4f68-b03a-422cf48226bf", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "9d341ccd-423a-47a3-9e85-524d04bf5e5f", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
};
setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});