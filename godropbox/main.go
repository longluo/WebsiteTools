package main

import "./dropbox"
import "fmt"
import "os"
import "flag"


/*
before bind:
https://www.dropbox.com/1/oauth2/authorize?response_type=token&client_id=k5wap7fov77y839&redirect_uri=https://127.0.0.1/oauth2/authorized

after bind:
https://127.0.0.1/oauth2/authorized#access_token=0IcdRnoL78YAAAAAAAAAAZU0ntdsZWT3QjEDZk6MhnZ1JrMFINaoJybZZeWkyTV6&token_type=bearer&uid=169582262
*/

//
var (
        tokens = map[string]string{
                "access_token":"0IcdRnoL78YAAAAAAAAAAZU0ntdsZWT3QjEDZk6MhnZ1JrMFINaoJybZZeWkyTV6",
                "token_type":"bearer",
        }
)

func main() {
        flag.Parse()

        args := flag.Args()
        if len(args) < 2 {
                fmt.Printf("Usage: godropbox path/to/locale/file  /path/at/dropbox\n")
                return
        }

        oauth2 := &dropbox.OAuth2{AccessToken: tokens["access_token"], TokenType: tokens["token_type"]}

        dropboxApi := &dropbox.DropboxApi{Signer: oauth2, Root: "sandbox", Locale: "CN"}

        localePath, remotePath := flag.Arg(0), flag.Arg(1)
        _, err := dropboxApi.UploadByChunked(localePath, remotePath, 10485760, 8) 
        //  10485760表示一次上传的块大小为1M，对于大文件，这个值设得大点可以减少上传的次数。
        if err != nil {
                fmt.Printf("error msg: %s\n", err)
                os.Exit(1)
        } else {
                os.Exit(0)
        }
}
