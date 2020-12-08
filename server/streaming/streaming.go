package streaming

import (
	"log"
	"math/rand"
	"sync"
	"time"
)

type Streaming struct {
	Data map[string]int64
	M    *sync.RWMutex
}

func NewStreaming() *Streaming {
	return &Streaming{
		Data: make(map[string]int64),
		M:    &sync.RWMutex{},
	}
}

func (s *Streaming) SetStreaming1() {
	for {
		s.M.Lock()
		var nextValue = int64(rand.Intn(2000))
		log.Println("Stream1 nextValue: ", nextValue)
		s.Data["s1"] = nextValue
		s.M.Unlock()
		time.Sleep(5 * time.Second)
	}
}

func (s *Streaming) SetStreaming2() {
	for {
		s.M.Lock()
		var nextValue = int64(rand.Intn(1000))
		log.Println("Stream2 nextValue: ", nextValue)
		s.Data["s2"] = nextValue
		s.M.Unlock()
		time.Sleep(2 * time.Second)
	}
}

func (s *Streaming) StartMonitoring() {
	log.Println("Start monitoring...")
	go s.SetStreaming1()
	go s.SetStreaming2()
}

func (s *Streaming) GetStreaming1() int64 {
	s.M.RLock()
	defer s.M.RUnlock()
	return s.Data["s1"]
}

func (s *Streaming) GetStreaming2() int64 {
	s.M.RLock()
	defer s.M.RUnlock()
	return s.Data["s2"]
}
