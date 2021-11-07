import play.sbt.PlayRunHook
import sbt._
import java.net.InetSocketAddress
import scala.sys.process.Process

object FrontEndCommands {
  def apply(base: File): PlayRunHook = {

    object UIProcess extends PlayRunHook {

      var watchProcess: Option[Process] = None

      override def beforeStarted(): Unit = {
        if (!(base / "ui" / "node_modules").exists()) Process("npm install", base / "ui").!
        Process("npm run build", base/"ui").run
      }

      override def afterStarted(): Unit = {
        watchProcess = Some(Process("npm run watch", base/"ui").run)
      }

      override def afterStopped(): Unit = {
        watchProcess.map(p => p.destroy())
        watchProcess = None
      }
    }

    UIProcess
  }
}
