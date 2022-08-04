# Chatbot-Prototyp zur Analyse der Nutzerakzeptanz

Diese Repository wurde im Rahmen der Master-Thesis erstellt und enthält die Dokumentation eines Chatbot-Prototyps und den dazugehörigen Umfragebogen. 
Mit dem Chatbot-Prototypen sollen die Nutzer bzw. Umfrageteilnehmer, sich zuerst an der Technologie versuchen, um eine einheitliche Basis für den Umfragebogen zu erreichen. Hier ist der Link zum Chatbot und zur Umfrage: [ebruelifb.github.io](https://ebruelifb.github.io)

Bei der Darstellung des Chatbots wurde vor allem darauf geachtet, dass der Aspekt der Menschenähnlichkeit miteinbezogen ist und dass der Chatbot Antworten auf Fragen aus dem Kundenservice geben kann. Der Chatbot ist dadurch in der Lage spezifische Informationen aus dem Online Retail der Mode Branche zu liefern. 

## Chatbot-Prototyp Entwicklung

Der Chatbot wurde auf Basis künstlicher Intelligenz über IBM Watson Assistant erstellt. Die künstliche Intelligenz die hinter IBM Watson Assistant steckt, ist in der Lage Nachrichten im Kontext zu verstehen um dann schnelle, konsistente und genaue Antworten bereitzustellen. Watson Assistant Input-Definitionen die, für das Abfangen von Informationen, verwendet wurden, sind "Intent" und "Entity". Für die Entwicklung des Konversationsablaufs wurden die Assistant Skills "Action" und "Dialog" verwendet. 

Weitere Informationen zu IBM Watson Assistant und zu den eingesetzten Komponenten finden Sie unter:
  - [Classic Watson Assistant](https://cloud.ibm.com/docs/assistant?topic=assistant-index) und
  - [Watson Assistant](https://cloud.ibm.com/docs/watson-assistant?topic=watson-assistant-welcome-new-assistant).

Der Kommunikationskanal, über den die Nutzer auf den Chatbot zugreifen können, ist Web chat. Die Integration des Web chats auf die, über diese GitHub Repository zur Verfügung gestellte Website, erfolgte über einen Code zum einbetten, der über die Watson Assistant UI gegeben ist. Weitere Informationen dazu finden Sie unter: [Watson Assistant Web chat](https://web-chat.global.assistant.watson.cloud.ibm.com/docs.html?to=api-configuration).

## Umfrage zur Nutzerakzeptanz

Die Umfrage, die über die Website [Survio](https://www.survio.com/de/) aufgesetzt wurde, ist über die Website durch ein eingebetten Button aufrufbar. Die Fragen des Umfragebogens beziehen sich auf die allgemeine Erfahrung der Nutzer in Bezug auf Chatbots sowie auf das Experiment mit dem Chatbot-Prototypen. Das Ziel der Umfrage ist, die Einsammlung der Ergebnisse um anhand dieser die Nutzerakzeptanz von menschenähnlichen Chatbots zu analysieren. Einfluss auf die Analyse soll auch das Alter der Teilnehmer haben. 
