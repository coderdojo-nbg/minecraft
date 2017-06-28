# Installation für Python mit Minecraft unter Linux

**gestestet unter Ubuntu 16.04 und 16.10**

## Einleitung
Folgende Software wird benötigt:
* **[Minecraft](https://minecraft.net/)**: Das Spiel selbst mit einem gültigen Useraccount. Die Demoversion reicht nicht aus!
* **Java**: Es wird ein Java-Development-Kit benötigt (JDK) für Spigot benötigt.
* **Python**: Die Programmiersprache um die es geht. Außerdem benötigt man __pip__, das ist der Packetmanager für python. Außerdem empfiehlt sich __IDLE__ als Entwicklungsumgebung.
* **Spigot**: Die Minecraft-Server-Software, die lokal läuft. Python benötigt dies um mit der Minecraft-API arbeiten zu können
* **Minecraft Python API (py3minepi)**: Dies stellt die Minecraft-API in Python bereit
* **[RaspberryJuice](https://dev.bukkit.org/projects/raspberryjuice/files)**: py3minepi wurde ursprünglich für den den RaspberryPi geschrieben, dieses Plugin für Spigot macht es auch unter Linux verfügbar.
* **git**: wird als Hilfstool benötigt

Damit alles ordentlich zusammenarbeitet, müssen die Versionen von Minecraft, Spigot und RaspberryJuice zusammenpassen. Auf der Webseite von [RaspberryJuice](https://dev.bukkit.org/projects/raspberryjuice/files) ist angegeben welche Minecraft-Version aktuell unterstützt wird. Daraus ergibt sich die Version für Spigot die kompiliert werden muss.

Aktuell (Juni 2017) ist RaspberryJuice in Version 1.9.1. verfügbar, die Minecraft in Version 1.12 unterstützt. Somit muss Spigot v1.12 und Minecraft v1.12 genutzt werden. Achtung: Bei Versionsänderungen muss Spigot neu kompiliert werden!

Die Java-Version sollte halbwegs aktuell sein, da sowohl RaspberryJuice als auch Minecraft mit alten Versionen nicht korrekt arbeiten.

## Installation der benötigten Pakete

```bash
sudo apt-add-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
sudo apt-get install python3, idle3, python3-pip, git
```

## Verzeichnis anlegen

Spigot wird nicht systemweit installiert, daher ist es sinnvoll eine eigenes Verzeichnis anzulegen:
```bash
mkdir MinecraftPython
cd MinecraftPython
mkdir MinecraftTools
cd MinecraftTools
```

## Spigot installieren und konfigurieren

Die Option `--rev` gibt an welche Version von Spigot installiert werden soll.

```bash
wget https://hub.spigotmc.org/jenkins/job/BuildTools/lastSuccessfulBuild/artifact/target/BuildTools.jar
git config --global --unset core.autocrlf
java -jar BuildTools.jar --rev 1.12
```
Dieser Prozess dauert eine Weile.

Wenn die Installation erfolgreich, muss der Server konfiguriert werden.
```bash
#Starten des Servers, beachte die Version von Spigot!
java -Xms512M -Xmx1024M -jar ./spigot-1.12.jar
```
Der Server startet nicht, sondern gibt eine Fehlermeldung aus, weil die EULA-Lizenz noch nicht akzeptiert wurde. Es wurde eine Datei "eula.txt" erstellt. In dieser muss **eula=false** zu **eula=true** geändert werden.

Nun den Server neu starten, nun sollte es funktionieren. Den Server durch Eingabe von `stop` beenden.

In der Datei "server.properties" kann jetzt die Serverkonfig angepasst werden. Interessant sind vor allem "gamemode" und force-gamemode".  

## Python-Minecraft-API installieren

```bash
wget https://github.com/py3minepi/py3minepi/archive/master.zip
unzip master.zip && rm master.zip
pip3 install ./py3minepi-master --user
#soll das Paket systemweit installiert werden, diesen Befehl ausführen
#sudo pip3 install ./py3minepi-master
```

## RaspberryJuice installieren
Die entsprechende Version von RaspberryJuice muss nur noch von der [Webseite](https://dev.bukkit.org/projects/raspberryjuice/files) runtergeladen und im Verzeichnis "plugins" von Spigot gespeichert werden.
