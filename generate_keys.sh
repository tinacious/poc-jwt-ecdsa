rm keys/*.key

openssl ecparam -name prime256v1 -genkey -out keys/private.key
openssl ec -in keys/private.key -pubout -out keys/public.key
