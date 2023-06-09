package datastore

import (
	"context"

	"github.com/google/uuid"
)

// Store users in this map to mimic a db
var userStore = make(map[string]User)

type User struct {
	Id    string
	Name  string
	Email string
	// task 5
	FavColour string
}

func CreateUser(ctx context.Context, name string, email string, favColour string) (string, error) {
	id := uuid.New().String()
	// save the user
	userStore[id] = User{
		Id:    id,
		Name:  name,
		Email: email,
		// task 5
		FavColour: favColour,
	}

	return id, nil
}
