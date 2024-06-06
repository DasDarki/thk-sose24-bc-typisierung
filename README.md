# Installationsschritte:
1. npm i
2. npm run start
3. Lets code!

# Aufgabenstellungen:

## Aufgabe 1 - Typisierung mit TypeScript:
Ziel der ersten Aufgabe ist es, den JavaScript-Code aus der "beispiel.js" in die "index.ts" zu übertragen. Dabei soll der JS-Code in syntaktisch & semantisch korrekten TypeScript-Code konvertiert werden. Wenn ihr den Code einfach 1:1 zu kopieren würdet, würde nodemon im Terminal Fehler auswerfen. Es geht dabei darum die im Vortragsteil erlernten Konzepte anzuwenden. Die Folien geben Hinweise, wie die Konvertierung bewerkstelligt werden kann. Wichtig: Wie so häufig führen viele Wege nach Rom und es gibt keinen festen Starting Point, mit dem ihr beginnen solltet. Überlegt euch am besten, wie ihr ein Projekt von Grund auf beginnen würdet und startet dann mit den Code-Abschnitten, die euch am logischsten vorkommen. 

### Optionale Zusatzaufgabe:
Im JS-Code befindet sich eine Funktion "processEntries", welche als Parameter einen Typen "projectsOrTasks" erfordert. Ziel ist es, diesen Typen zu entwerfen und zu implementieren. Falls ihr diese Aufgabe zunächst überspringen möchtet, verzichtet darauf, diese Funktion mit zu übertragen.

## Aufgabe 2 - Polymorphie in TypeScript:
Für diese Aufgabe könnt ihr entweder euren Code aus Aufgabe 1 verwenden oder ihr fragt uns nach der Musterlösung. Um die Konzepte der Polymorphie nicht zu vernachlässigen, setzt sich die nun folgende Aufgabe mit Polymorphie in TypeScript auseinander. 
Implementiert dazu ein neues Interface "Nameable". Überlegt euch, welches Attribut, das Interface umfassen sollte. Dieses soll nun "Project" und "Task" erweitern, indem die beiden davon erben. Anschließend soll die Funktion "processEntries" - sofern ihr die Optionale Zusatzaufgabe nicht erledigt habt, solltet ihr diese nun erledigen oder euch an der Musterlösung bedienen - als Parameter ein Array von Nameables übergeben bekommen. Implementiert nun eine Funktion "printNameableAttr", welche die Attribute des Nameable-Interfaces ausgibt. Zum Schluss solltet ihr die Implementation testen, überlegt euch, wie ihr das neue Interface und die neue Funktion am besten testen könnt. 
