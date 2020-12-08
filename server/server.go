package main

import (
	"./streaming"
	"./streamingpb"
	"log"
	"net"
	"time"

	"google.golang.org/grpc"
)

type server struct {
	Streaming *streaming.Streaming
}

func (s *server) Stream1(_ *streamingpb.StreamingRequest,
	stream streamingpb.Streaming_Stream1Server) error {
	for {
		time.Sleep(time.Second * 5)

		s1 := s.Streaming.GetStreaming1()
		log.Println("sending s1", s1)
		err := stream.Send(&streamingpb.StreamingResponse{Value: s1})
		if err != nil {
			log.Println("Error sending message ", err)
		}
	}
}

func (s *server) Stream2(_ *streamingpb.StreamingRequest,
	stream streamingpb.Streaming_Stream2Server) error {
	for {
		time.Sleep(time.Second * 2)

		s2 := s.Streaming.GetStreaming2()

		log.Println("sending s2", s2)
		err := stream.Send(&streamingpb.StreamingResponse{Value: s2})
		if err != nil {
			log.Println("Error sending message ", err)
		}
	}
}

func main() {

	str := streaming.NewStreaming()

	str.StartMonitoring()

	lis, err := net.Listen("tcp", "0.0.0.0:8087")

	if err != nil {
		log.Fatalf("Error while listening : %v", err)
	}

	s := grpc.NewServer()
	streamingpb.RegisterStreamingServer(s, &server{Streaming: str})

	if err := s.Serve(lis); err != nil {
		log.Fatalf("Error while serving : %v", err)
	}
}
