Application use a Shared Access Signature (SAS) Token and a Blob service SAS URL to connect to Azure BLOB storage.
These token and url will expire on 10/26/2021 and has to be regenerated and updated in the appConstants.ts file.

Following are valid till 10/26/2021 and has to be regenerated post this date

Connection string
BlobEndpoint=https://bridgei2i.blob.core.windows.net/;SharedAccessSignature=sv=2020-02-10&ss=b&srt=sco&sp=rwdlacx&se=2021-10-26T16:48:00Z&st=2021-03-26T08:48:00Z&spr=https&sig=%2FLc1Wdf5BfR1I9rrDNlja0EJ1zBGCF7yn7vXNW1xC%2Bg%3D

SAS token
?sv=2020-02-10&ss=b&srt=sco&sp=rwdlacx&se=2021-10-26T16:48:00Z&st=2021-03-26T08:48:00Z&spr=https&sig=%2FLc1Wdf5BfR1I9rrDNlja0EJ1zBGCF7yn7vXNW1xC%2Bg%3D

Blob service SAS URL
https://bridgei2i.blob.core.windows.net/?sv=2020-02-10&ss=b&srt=sco&sp=rwdlacx&se=2021-10-26T16:48:00Z&st=2021-03-26T08:48:00Z&spr=https&sig=%2FLc1Wdf5BfR1I9rrDNlja0EJ1zBGCF7yn7vXNW1xC%2Bg%3D



Note:

Links for Regenerating from Frontend

https://docs.microsoft.com/en-us/azure/developer/javascript/tutorial/browser-file-upload-azure-storage-blob


Link to create the same from a Backend Node service

https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-nodejs